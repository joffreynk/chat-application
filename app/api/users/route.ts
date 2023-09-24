import prismadb from "@/lib/prismadb";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    const { data, id } = await req.json();
    
  try {
    if (id && id.length > 4) {
      await prismadb.user.update({
        where: {
          id: id,
        },
        data,
      });
    } else {
      await prismadb.user.create({
        data: {
          ...data,
        },
      });
    }
    redirect("/");
} catch (error: any) {
    console.log(error.message);
    return NextResponse.json(`USER ACCOUNT CREATION ERROR ${ error.message }`);
  }

};
