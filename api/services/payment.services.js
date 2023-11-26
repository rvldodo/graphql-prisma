import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getPayments = () => {
  return prisma.payment.findMany();
};

export const getPaymentsById = (id) => {
  return prisma.payment.findUnique(id);
};

export const updatePaymentsById = (id, data) => {
  return prisma.payment.update(id, data);
};

export const createPayment = (data) => {
  return prisma.payment.create({
    data,
  });
};

export const deletePayment = (id) => {
  return prisma.payment.delete(id);
};
