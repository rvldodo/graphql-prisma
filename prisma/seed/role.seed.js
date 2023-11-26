import { PrismaClient } from "@prisma/client";
import logger from "../../utils/logger.js";

const prisma = new PrismaClient();
async function main() {
  await prisma.role.create({
    data: { role: "superAdmin" },
  });
  await prisma.role.create({
    data: { role: "admin" },
  });
  await prisma.role.create({
    data: { role: "user" },
  });
}
main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    logger.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
