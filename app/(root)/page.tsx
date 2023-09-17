import { findUser } from "@/lib/serverActions";
import { UserButton, currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function Home() {
  const logUser = await currentUser();
  if(!logUser) redirect('/login')
  const user = await findUser(logUser?.id);

  return (
    <main>
      <h1 className="text-pink-700 shadow-2xl ">Hello messanger</h1>
      <div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </main>
  );
}
