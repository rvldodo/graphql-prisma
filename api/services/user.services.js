import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUsers = () => {
  return prisma.user.findMany();
};

export const getUserById = (id) => {
  return prisma.user.findUnique(id);
};

export const updateUserById = (id, data) => {
  return prisma.user.update(id, data);
};

export const createUser = (data) => {
  return prisma.user.create({
    data,
  });
};

export const deleteUser = (id) => {
  return prisma.user.delete(id);
};
