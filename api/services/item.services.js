import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getItems = () => {
  return prisma.item.findMany();
};

export const getItemById = (id) => {
  return prisma.item.findUnique(id);
};

export const updateItemById = (id, data) => {
  return prisma.item.update(id, data);
};

export const createItem = (data) => {
  return prisma.item.create({
    data,
  });
};

export const deleteItem = (id) => {
  return prisma.item.delete(id);
};
