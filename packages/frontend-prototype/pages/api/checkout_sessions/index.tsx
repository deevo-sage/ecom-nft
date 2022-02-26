import { NextApiHandler } from "next";
import { Stripe } from "stripe";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const handler: NextApiHandler = async (req, res) => {
  let line_items = req.body;
  const params: Stripe.Checkout.SessionCreateParams = {
    submit_type: "pay",
    payment_method_types: ["card"],
    line_items,
    success_url: `${req.headers.origin}/success`,
    cancel_url: `${req.headers.origin}/fail`,
  };
  const checkoutSession: Stripe.Checkout.Session =
    await stripe.checkout.sessions.create(params);
  res.json(checkoutSession);
};

export default handler;
