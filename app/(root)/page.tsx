import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import "react-chat-elements/dist/main.css";

import Chat from "@/components/shared/chat";
import { findUser } from "@/lib/serverActions/serverActions";

export default async function Home() {
  const logUser = await currentUser();
  if (!logUser) redirect("/login");
  const user = await findUser(logUser?.id);
    if (!user) redirect("/onboarding");

  return (
    <main>

      <Chat />
    </main>
  );
}
