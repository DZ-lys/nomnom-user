"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Category } from "@/types";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export const Dishes = () => {
  const [section, setSection] = useState<Category[]>([]);

  const getCategoryName = async () => {
    const data = await fetch("http://localhost:7800/addCategory");
    const jsonData = await data.json();
    setSection(jsonData.data);
  };
  useEffect(() => {
    getCategoryName();
  }, []);

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
    <div className="flex flex-col gap-10">
      {section?.map((type) => {
        return (
          <div className="max-w-[100%] h-[36.380rem] bg-white rounded-xl p-6 ">
            <h1 className="font-semibold text-xl mb-5 ">{type.categoryName}</h1>
            <div></div>
            <Dialog>
              <DialogTrigger asChild>
                <div className="flex flex-col gap-5 justify-center items-center w-[17rem] h-60 rounded-3xl border border-[#EF4444] border-dashed px-4 py-2 hover:cursor-pointer ">
                  <Button
                    variant="outline"
                    className="w-10 h-10 rounded-full py-2 px-4 bg-[#EF4444] text-white flex justify-center items-center hover:bg-[#ef4444] hover:text-white "
                  >
                    <Plus />
                  </Button>
                  <div className="w-36">
                    <p className="font-medium text-sm text-center ">
                      Add new Dish to Salads
                    </p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add new Dish to {type.categoryName}</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                  >
                    <FormItem className="w-[25.8rem] h-20 flex items-center justify-around ">
                      <FormField
                        control={form.control}
                        name="foodName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Food name</FormLabel>
                            <FormControl>
                              <Input placeholder="Type food name" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="foodPrice"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Food price</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter price..." {...field} />
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
                                placeholder="List ingredients..."
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </FormItem>
                    <Button type="submit" className="ml-[23rem]">
                      Add Dish
                    </Button>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
          </div>
        );
      })}
    </div>
  );
};
