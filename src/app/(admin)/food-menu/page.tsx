"use client";
import { useEffect } from "react";

const Food_Menu = () => {
  useEffect(() => {
    const getCategories = async () => {
      const data = await fetch("http://localhost:7800/addCategory");
      const jsonData = await data.json();
      console.log(jsonData);
    };
    getCategories();
  });

  return (
    <div className="flex flex-col px-9 gap-6 bg-slate-100 w-[100vw] ">
      <div className=" mt-16 max-w-[73.188rem] h-[9.625rem] bg-white top-6 left-56 gap-6 "></div>
      <div></div>
    </div>
  );
};

export default Food_Menu;
