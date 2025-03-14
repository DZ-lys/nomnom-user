"use client";

import { Categories } from "./_components/Categories";

const Food_Menu = () => {
  return (
    <div className="flex flex-col px-9 gap-6 bg-slate-100 w-[100vw] ">
      <Categories />
      <div className="max-w-[73.188rem] h-[36.380rem] bg-white rounded-xl"></div>
    </div>
  );
};
export default Food_Menu;
