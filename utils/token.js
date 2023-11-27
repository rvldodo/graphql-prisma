import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import ErrorHandler from "../api/helpers/error.handler";
import logger from "./logger";
dotenv.config();

export const getToken = (req) => {
  try {
    const bearer = req.headers["authorization"];
    if (!bearer) throw new ErrorHandler(401, "Token not found", 500);
    const token = bearer.split(" ")[1];

    return token;
  } catch (err) {
    logger.error(err);
  }
};

export const jwtToken = (user) => {
  try {
    if (!user) throw new ErrorHandler(404, "There is no user passing", 500);
    const payload = {
      id: user.id,
      email: user.email,
      role_id: user.role_id,
    };

    return jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "24h" });
  } catch (err) {
    logger.error(err);
  }
};

export const extractToken = (token) => {
  const { id, email, role_id } = jwt.verify(token, process.env.JWT_SECRET_KEY);
  return { id, email, role_id };
};
