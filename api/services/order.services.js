import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getOrders = () => {
  return prisma.order.findMany();
};

export const getOrderById = (id) => {
  return prisma.order.findUnique(id);
};

export const updateOrderById = (id, data) => {
  return prisma.order.update(id, data);
};

export const createOrder = (data) => {
  return prisma.order.create({
    data,
  });
};

export const deleteOrder = (id) => {
  return prisma.order.delete(id);
};
