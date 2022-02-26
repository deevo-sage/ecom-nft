import { Resolvers, User as UserType } from "../types/resolvers-types";
import { MentorMutations, MentorQueries } from "./mentor";
import { User, UserMutations, UserQueries } from "./user";
import { ReviewMutations, ReviewQueries } from "./review";
import { ExperienceMutations, ExperienceQueries } from "./experience";
import { EducationMutations, EducationQueries } from "./education";
import { LiveSessionMutations, LiveSessionQueries } from "./liveSession";
import { FieldMutations, FieldQueries } from "./fields";
import {
  MentorApplicationMutations,
  MentorApplicationQueries,
} from "./mentorApplication";
import { HomeQueries } from "./home";

const resolvers: Resolvers<UserType | undefined> = {
  Query: {
    ...(MentorQueries as any),
    ...UserQueries,
    ...ReviewQueries,
    ...ExperienceQueries,
    ...EducationQueries,
    ...LiveSessionQueries,
    ...FieldQueries,
    ...MentorApplicationQueries,
    ...HomeQueries,
  },
  Mutation: {
    ...(MentorMutations as any),
    ...UserMutations,
    ...ReviewMutations,
    ...ExperienceMutations,
    ...EducationMutations,
    ...LiveSessionMutations,
    ...FieldMutations,
    ...MentorApplicationMutations,
   
  },
  User: User as any,
};
export default resolvers;
