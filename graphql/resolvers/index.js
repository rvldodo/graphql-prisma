import { itemResolvers } from "./item.resolvers.js";
import { orderResolver } from "./order.resolver.js";
import { paymentResolvers } from "./payment.resolvers.js";
import { userResolvers } from "./user.resolvers.js";

export const resolvers = {
  Query: {
    ...itemResolvers.Query,
    ...orderResolver.Query,
    ...paymentResolvers.Query,
    ...userResolvers.Query,
  },
  Mutation: {
    ...itemResolvers.Mutation,
    ...orderResolver.Mutation,
    ...paymentResolvers.Mutation,
    ...userResolvers.Mutation,
  },
};
