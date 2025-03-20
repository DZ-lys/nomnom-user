"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const test = () => {
  const PRESET_NAME = "food-nomnom";
  const CLOUDINARY_NAME = "da889nybx";

  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);

  const handleFile = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("pleese select a file");
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", PRESET_NAME);
    formData.append("api_key", CLOUDINARY_NAME);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      console.log(data);
      setImage(data.secure_url);
    } catch (error) {
      console.error(error);
      alert("failed to upload");
    }
  };
  console.log(file);

  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <Input type="file" onChange={handleFile} />
      <Button onClick={handleUpload}>upload</Button>
      {image && (
        <div className="">
          <img src={image} alt="uploaded" className="w-[400px] h-[400px] " />
        </div>
      )}
    </div>
  );
};

export default test;
