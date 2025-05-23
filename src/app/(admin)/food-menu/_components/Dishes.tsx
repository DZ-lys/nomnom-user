"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Category, FoodWithCategoryType } from "@/types";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import FoodCard from "./Card";

export const Dishes = () => {
  const [section, setSection] = useState<Category[]>([]);
  const [details, setDetails] = useState<FoodWithCategoryType[]>([]);

  const getCategoryName = async () => {
    const data = await fetch("http://localhost:7800/addCategory");
    const jsonData = await data.json();
    setSection(jsonData.data);
  };
  const getDetails = async () => {
    const data = await fetch("http://localhost:7800/details");
    const jsonData = await data.json();
    setDetails(jsonData.dishes);
  };

  useEffect(() => {
    getCategoryName();
    getDetails();
  }, []);

  useEffect(() => {
    console.log("use state details", details);
  }, [details]);

  const formSchema = z.object({
    foodName: z.string().min(3),
    foodPrice: z.string().min(1),
    ingredients: z.string().min(3),
    foodImage: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      foodName: "",
      foodPrice: "",
      ingredients: "",
      foodImage: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div className="flex flex-col gap-10 ">
      {section?.map((type, index) => {
        return (
          <div
            key={index}
            className="max-w-[100%] h-[36.380rem] bg-white overflow-scroll rounded-xl p-6 "
          >
            <h1 className="font-semibold text-xl mb-5 ">{type.categoryName}</h1>
            <div className="flex gap-3 flex-wrap ">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="flex flex-col gap-5 justify-center items-center w-[17rem] h-60 rounded-3xl border border-[#EF4444] border-dashed px-4 py-2 hover:cursor-pointer ">
                    <Button className="w-10 h-10 rounded-full py-2 px-4 bg-[#EF4444] text-white flex justify-center items-center hover:bg-[#ef4444] hover:text-white ">
                      <Plus />
                    </Button>
                    <div className="w-36">
                      <p className="font-medium text-sm text-center ">
                        Add new Dish to Salads
                      </p>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="w-[29rem]">
                  <DialogHeader>
                    <DialogTitle>
                      Add new Dish to {type.categoryName}
                    </DialogTitle>
                  </DialogHeader>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-4"
                    >
                      <FormItem className="w-[25.8rem] h-20 flex items-center gap-7 ">
                        <FormField
                          control={form.control}
                          name="foodName"
                          render={({ field }) => (
                            <FormItem className="w-48 h-16 mt-2">
                              <FormLabel>Food name</FormLabel>
                              <FormControl>
                                <Input
                                  className="w-48 h-9 "
                                  placeholder="Type food name"
                                  {...field}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="foodPrice"
                          render={({ field }) => (
                            <FormItem className="w-48 h-16 ">
                              <FormLabel>Food price</FormLabel>
                              <FormControl>
                                <Input
                                  className="w-48 h-9 "
                                  placeholder="Enter price..."
                                  {...field}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </FormItem>
                      <FormItem>
                        <FormField
                          control={form.control}
                          name="ingredients"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Ingredients</FormLabel>
                              <FormControl>
                                <Input
                                  className="w-[25.7rem] h-24 flex "
                                  placeholder="List ingredients..."
                                  {...field}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </FormItem>
                      <FormItem>
                        <FormField
                          control={form.control}
                          name="foodImage"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Food image</FormLabel>
                              <FormControl>
                                <Input
                                  type="file"
                                  className="w-[25.7rem] h-28 "
                                  {...field}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </FormItem>
                      <Button type="submit" className="ml-[20rem]">
                        Add Dish
                      </Button>
                    </form>
                  </Form>
                </DialogContent>
              </Dialog>
              {details
                ?.filter((food) => food.category._id === type._id)
                .map((det: FoodWithCategoryType, index) => {
                  return <FoodCard key={index} food={det} />;
                })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
