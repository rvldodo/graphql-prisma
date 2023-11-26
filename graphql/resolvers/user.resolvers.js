import {
  createUser,
  getUserById,
  getUsers,
  updateUserById,
  deleteUser,
} from "../../api/services/user.services.js";

export const userResolvers = {
  Query: {
    async users(_, { input }) {
      return await getUsers();
    },
    async user(_, { input }) {
      console.log(input);
      return await getUserById(input.id);
    },
  },
  Mutation: {
    async createUser(_, { input }) {
      return await createUser(input);
    },
    async updateUser(_, { input }) {
      return await updateUserById(input.id, input);
    },
    async deleteUser(_, input) {
      return await deleteUser(input.id);
    },
  },
};
