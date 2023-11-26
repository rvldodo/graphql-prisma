import {
  createOrder,
  deleteOrder,
  getOrderById,
  getOrders,
  updateOrderById,
} from "../../api/services/order.services.js";

export const orderResolver = {
  Query: {
    async orders(_, { input }) {
      return await getOrders();
    },
    async order(_, { input }) {
      return await getOrderById(input.id);
    },
  },
  Mutation: {
    async createOrder(_, { input }) {
      return await createOrder(input);
    },
    async updateOrder(_, { input }) {
      return await updateOrderById(input.id, input);
    },
    async deleteOrder(_, { input }) {
      return await deleteOrder(input.id);
    },
  },
};
