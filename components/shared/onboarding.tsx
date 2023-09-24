"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UploadButton } from "@/lib/uploadthing";
import { Button, Image, Input, Textarea } from "@nextui-org/react";
import "@uploadthing/react/styles.css";

import { valid, validationSchema, UserType } from "@/types";
const BoardingForm = ({
  boardingData,
  update,
}: {
  boardingData: UserType;
  update: string;
}) => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    watch,
    formState: { errors },
  } = useForm<validationSchema>({
    resolver: zodResolver(valid),
    defaultValues: boardingData,
  });
  const submit = async (data: validationSchema) => {
    await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({data, id: update}),
      headers: {'Content-Type': 'application/json'},
    })
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(submit)}>
      <div className="flex gap-2 items-center">
        <Image
          width={200}
          height={200}
          className="rounded-full object-fit"
          alt="profile picture"
          src={watch("profilePicture")}
        />
        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={(res: any) => {
            // Do something with the response
            console.log("Files: ", res);
            setValue("profilePicture", res[0].url);
          }}
          onUploadError={(error: Error) => {
            // Do something with the error.
            alert(`ERROR! ${error.message}`);
          }}
        />
      </div>
      <Input
        isRequired
        label="Full Name"
        placeholder="Enter your name"
        defaultValue={getValues("name")}
        type="text"
        {...register("name")}
      />
      {errors?.name && <p className="text-red-600">{errors?.name.message}</p>}
      <Input
        isRequired
        label="User Name"
        placeholder="Enter your user name"
        defaultValue={getValues("userName")}
        {...register("userName")}
        type="text"
      />
      {errors?.userName && (
        <p className="text-red-600">{errors?.userName.message}</p>
      )}
      <Input
        isRequired
        label="Phone Number"
        placeholder="Enter your Phone number"
        defaultValue={getValues("tel")}
        type="number"
        {...register("tel")}
      />
      {errors?.tel && <p className="text-red-600">{errors?.tel.message}</p>}
      <Textarea
        isRequired
        label="Biography"
        labelPlacement="outside"
        placeholder="Enter your bio"
        defaultValue={getValues("bio")}
        {...register("bio")}
      />
      {errors?.bio && <p className="text-red-600">{errors?.bio.message}</p>}
      <div className="flex gap-2 justify-end">
        <Button fullWidth color="primary" type="submit">
          Login
        </Button>
      </div>
    </form>
  );
};

export default BoardingForm;
