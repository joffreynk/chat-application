import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
      <h1 className="text-pink-700 shadow-2xl ">Hello messanger</h1>
      <div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </main>
  );
}
