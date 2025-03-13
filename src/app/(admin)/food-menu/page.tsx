"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const Food_Menu = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const data = await fetch("http://localhost:7800/addCategory");
    const jsonData = await data.json();
    setCategories(jsonData.data);
    console.log(jsonData);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const createCategory = async (categoryName: string) => {
    const data = await fetch("http://localhost:7800/addCategory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ categoryName: categoryName }),
    });
    getCategories();
  };

  return (
    <div className="flex flex-col px-9 gap-6 bg-slate-100 w-[100vw] ">
      <div className=" mt-16 max-w-[73.188rem] h-[11rem] bg-white rounded-xl flex gap-4 ">
        {categories?.map((category) => {
          return <h2 key={category._id}>{category.categoryName}</h2>;
        })}

        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="w-9 h-9 rounded-full py-2 px-4 bg-[#EF4444] text-white flex justify-center items-center hover:bg-[#ef4444] "
            >
              <Plus />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add new Category</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Category name
                </Label>
                <Input
                  placeholder="Input category name"
                  value=""
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" className="">
                Add
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="max-w-[73.188rem] h-[36.380rem] bg-white rounded-xl"></div>
    </div>
  );
};

export default Food_Menu;
