import BoardingForm from "@/components/shared/onboarding";
import { findUser } from "@/lib/serverActions/serverActions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const OnBoarding = async () => {
  const loggedUser = await currentUser();
  if (!loggedUser) redirect("/login");
  const user = await findUser(loggedUser?.id);
  const boarding = {
    userId: user?.userId || loggedUser.id,
    name: user?.name || `${loggedUser.firstName} ${loggedUser.lastName}`,
    profilePicture: user?.profilePicture || loggedUser.imageUrl,
    bio: user?.bio || "",
    tel: user?.tel || loggedUser.phoneNumbers[0]?.phoneNumber || "",
    userName: user?.userName || loggedUser.username || "",
    email: user?.email || loggedUser.emailAddresses[0].emailAddress || "",
  };

  return (
    <div className=" px-5 py-20 m-auto w-[370px]">
      <h2 className=" text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-100 to-blue-500 py-8">
        Onboarding
      </h2>
      <BoardingForm boardingData={boarding} update={user?.id ? user?.id : ""} />
    </div>
  );
};

export default OnBoarding;
