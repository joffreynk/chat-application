import { z } from "zod";

export  type UserType = {
      userId: string
      name: string
      profilePicture: string
      bio: string
      tel: string
      userName: string | ''
      email : string
    };


    export const valid = z.object({
      userId: z.string().min(3),
      name: z.string().min(3),
      profilePicture: z.string().min(10),
      bio: z.string().min(5),
      tel: z.string().min(5),
      userName: z.string().min(3),
      email: z.string().min(3),
    });

    export type validationSchema = z.infer<typeof valid>;