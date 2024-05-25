import { PrismaClient } from "@prisma/client";


export const db = new PrismaClient() || globalThis.prisma;

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
