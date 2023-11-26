import { readFileSync } from "fs";
import { graphql } from "graphql";
import path from "path";

const currentFilePath = new URL(import.meta.url).pathname;

const orderTypes = readFileSync(
  path.join(path.dirname(currentFilePath), "order.graphql"),
  "utf-8",
);
const itemTypes = readFileSync(
  path.join(path.dirname(currentFilePath), "item.graphql"),
  "utf-8",
);
const paymentTypes = readFileSync(
  path.join(path.dirname(currentFilePath), "payment.graphql"),
  "utf-8",
);
const userTypes = readFileSync(
  path.join(path.dirname(currentFilePath), "user.graphql"),
  "utf-8",
);

export const typeDefs = `#graphql
  ${orderTypes}
  ${itemTypes}
  ${paymentTypes}
  ${userTypes}
`;
