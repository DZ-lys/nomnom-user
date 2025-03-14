import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Category } from "@/types";

export const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const getCategories = async () => {
    const data = await fetch("http://localhost:7800/addCategory");
    const jsonData = await data.json();
    setCategories(jsonData.data);
    console.log(jsonData);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const formSchema = z.object({
    categoryName: z.string().min(4, "it at least needs 4 or more letters"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      categoryName: "",
    },
  });

  const createCategory = async (values: z.infer<typeof formSchema>) => {
    const data = await fetch("http://localhost:7800/addCategory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ categoryName: values.categoryName }),
    });
    const jsonData = await data.json();
    console.log("data", jsonData);
    getCategories();
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    createCategory(values);
  }

  return (
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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="categoryName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Food name</FormLabel>
                    <FormControl>
                      <Input placeholder="Add new category" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Add</Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
