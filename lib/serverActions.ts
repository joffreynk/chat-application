'use server';

import { redirect } from "next/navigation";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export const findUser = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: { userId: userId },
  });

  if (!user) redirect("/onboarding");

  return user;
};