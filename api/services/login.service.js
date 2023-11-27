import { PrismaClient } from "@prisma/client";
import ErrorHandler from "../helpers/error.handler";
import bcrypt from "bcrypt";
import logger from "../../utils/logger";

const prisma = new PrismaClient();

export const login = async (body) => {
  try {
    const { email, password } = body;
    const user = prisma.user.findUnique(email);
    if (!user) throw new ErrorHandler(404, "User not registered yet", 404);
    const compared = await bcrypt.compare(user.password, password);
    if (!compared) throw new ErrorHandler(400, "Password incorrect", 400);
  } catch (err) {
    logger.error(err);
  }
};
