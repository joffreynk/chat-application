import BoardingForm from "@/components/shared/onboarding";


const OnBoarding = () => {

  return (
    <div className=" px-5 py-20 m-auto">
      <h2 className=" text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-100 to-blue-500 py-8
      ">
        Onboarding
      </h2>
      <BoardingForm />
    </div>
  );
}

export default OnBoarding