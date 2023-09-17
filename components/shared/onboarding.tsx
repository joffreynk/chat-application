"use client";
import { UploadButton } from "@/lib/uploadthing";
import { Button, Image, Input } from "@nextui-org/react";
import "@uploadthing/react/styles.css";

const BoardingForm = () => {
  return (
    <form className="flex flex-col gap-4">
      <div className="flex gap-2 items-center">
        <Image
          width={200}
          alt="NextUI hero Image"
          src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
        />
        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            // Do something with the response
            console.log("Files: ", res);
            alert("Upload Completed");
          }}
          onUploadError={(error: Error) => {
            // Do something with the error.
            alert(`ERROR! ${error.message}`);
          }}
        />
      </div>
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
        <Button fullWidth color="primary">
          Login
        </Button>
      </div>
    </form>
  );
};

export default BoardingForm;
