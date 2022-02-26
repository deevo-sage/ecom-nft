require("dotenv").config();
import cors from "cors";
import express from "express";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import typeDefs from "./typeDefs";
import http from "http";
import { PrismaClient } from "@prisma/client";
import resolvers from "./resolvers";
import GetCurrentUser from "./middlewares/auth";
import {
  authenticationDirective,
  authorizationDirective,
  toCaseDirective,
} from "./typeDefs/directives";
// import { UserServices } from "./service/user";
import CreateCheckoutSession from "./middlewares/stripe";

// export const prisma = new PrismaClient();

async function startApolloServer() {
  let schema = makeExecutableSchema({ typeDefs, resolvers });
  schema = authorizationDirective(schema, "authorization");
  schema = authenticationDirective(schema, "authentication");
  schema = toCaseDirective(schema, "toCase");

  const PORT = process.env.PORT || 8000;
  const app = express();
  app.use(cors());
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    schema,
    mocks: true,
    mockEntireSchema: true,
    context: async ({ req, res }) => {
      return null;
    },
    // plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();

  // Stripe
  const private_key = process.env.STRIPE_SECRET_KEY;
  app.post("/checkout_session", CreateCheckoutSession(private_key));

  server.applyMiddleware({ app });
  httpServer.listen({ port: PORT });
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  );
}
try {
  startApolloServer();
} catch (err) {
  console.log(err);
}
