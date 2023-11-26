import {
  createItem,
  deleteItem,
  getItemById,
  getItems,
  updateItemById,
} from "../../api/services/item.services.js";

export const itemResolvers = {
  Query: {
    async items(_, { input }) {
      return await getItems();
    },
    async item(_, { input }) {
      return await getItemById(input.id);
    },
  },
  Mutation: {
    async createItem(_, { input }) {
      return await createItem(input);
    },
    async updateItem(_, { input }) {
      return await updateItemById(input.id, input);
    },
    async deleteItem(_, { input }) {
      return await deleteItem(input.id);
    },
  },
};
