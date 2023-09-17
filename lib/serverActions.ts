'use server';

import { redirect } from "next/navigation";
import prismadb from "./prismadb";

export const findUser = async (userId: string) => {
  const user = await prismadb.user.findUnique({
    where: { userId: userId },
  });

  if (!user) redirect("/onboarding");

  return user;
};