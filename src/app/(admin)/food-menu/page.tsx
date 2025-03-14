"use client";

import { Categories } from "./_components/Categories";
import { Dishes } from "./_components/Dishes";

const Food_Menu = () => {
  return (
    <div className="flex flex-col px-9 gap-6 bg-slate-100 w-[100vw] ">
      <Categories />
      <Dishes />
    </div>
  );
};
export default Food_Menu;
