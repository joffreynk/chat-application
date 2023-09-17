import { Button, Input } from "@nextui-org/react";

const OnBoarding = () => {

  return (
    <form className="flex flex-col gap-4">
      <Input
        isRequired
        label="Email"
        placeholder="Enter your email"
        type="email"
      />
      <Input
        isRequired
        label="Password"
        placeholder="Enter your password"
        type="password"
      />
      <div className="flex gap-2 justify-end">
        <Button  fullWidth color="primary">
          Login
        </Button>
      </div>
    </form>
  );
}

export default OnBoarding