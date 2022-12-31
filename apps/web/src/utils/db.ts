import { PrismaClient } from '@yoursanonymously/db';

declare global {
  // allow global `var` declarations

  // eslint-disable-next-line no-var

  // eslint-disable-next-line no-unused-vars, no-var, vars-on-top
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ['query'],
  });

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;
