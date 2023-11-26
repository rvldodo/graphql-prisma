import express from "express";
import bodyParser from "body-parser";
import logger from "./utils/logger.js";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import dotenv from "dotenv";
import { resolvers } from "./graphql/resolvers/index.js";
import { typeDefs } from "./graphql/typeDefs/index.js";
import { PrismaClient } from "@prisma/client";

dotenv.config();

const PORT = process.env.PORT || 3500;
const app = express();
(async () => {
  const prisma = new PrismaClient();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use("/graphql", expressMiddleware(server));

  app.listen(PORT, async () => {
    logger.info(`🚀 Server runnning and listen on port ${PORT}`);
    await prisma.$connect();
    logger.info(`🗂️ Successfully connect to DB!!!`);
  });
})();
