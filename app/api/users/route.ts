import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export const POST = async(req: Request, res: Response)=>{
  const { data, id} = await req.json();
    try {
      let user = null;
      if (id.length > 4) {
        user = await prismadb.user.update({
          where: {
            id: id,
          },
          data,
        });
      } else {
        user = await prismadb.user.create({
          data,
        });
      }
      return new NextResponse(`user created successfully`);
    } catch (error: any) {
      return new NextResponse(`failed to create user ${error.message}`);
    }
}