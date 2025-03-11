"use client";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Food_Menu = () => {
  //   useEffect(() => {
  //     const getCategories = async () => {
  //       const data = await fetch("http://localhost:7800/addCategory");
  //       const jsonData = await data.json();
  //       console.log(jsonData);
  //     };
  //     getCategories();
  //   });

  return (
    <div className="flex flex-col px-9 gap-6 bg-slate-100 w-[100vw] ">
      <div className=" mt-16 max-w-[73.188rem] h-[11rem] bg-white rounded-xl ">
        <Button className="w-9 h-9 rounded-full py-2 px-4 bg-[#EF4444] text-white flex justify-center items-center hover:bg-[#ef4444] ">
          <Plus />
        </Button>
      </div>
      <div className="max-w-[73.188rem] h-[36.380rem] bg-white rounded-xl"></div>
    </div>
  );
};

export default Food_Menu;
