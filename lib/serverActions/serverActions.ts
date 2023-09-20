"use server";

import prismadb from "../prismadb";

export const findUser = async (userId: string) => {
  const user = await prismadb.user.findUnique({
    where: { userId: userId },
  });

  return user;
};
