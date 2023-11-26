import {
  createPayment,
  deletePayment,
  getPayments,
  getPaymentsById,
  updatePaymentsById,
} from "../../api/services/payment.services.js";

export const paymentResolvers = {
  Query: {
    async payments(_, { input }) {
      return await getPayments();
    },
    async payment(_, { input }) {
      return await getPaymentsById(input.id);
    },
  },
  Mutation: {
    async createPayment(_, { input }) {
      return await createPayment(input);
    },
    async updatePayment(_, input) {
      return await updatePaymentsById(input.id, input);
    },
    async deletePayment(_, { input }) {
      return await deletePayment(input.id);
    },
  },
};
