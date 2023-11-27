import { PrismaClient } from "@prisma/client";
import logger from "../../utils/logger";
import { extractToken, getToken } from "../../utils/token";
import ErrorHandler from "../helpers/error.handler";

const prisma = new PrismaClient();

export const isAdmin = (req, res, next) => {
  try {
    const token = getToken(req, res);
    const { id, email, role_id } = extractToken(token);
    if (!id || !email || !role_id)
      throw new ErrorHandler(404, "Token has empty", 404);
    const user = prisma.user.findUnique(email);
    if (!user)
      throw new ErrorHandler(404, "User not found or not register yet", 404);
    if (user.role_id !== 1) throw new ErrorHandler(401, "Unauthorize", 401);
    next();
  } catch (err) {
    logger.error(err);
  }
};
