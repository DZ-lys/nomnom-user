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
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
    <div className=" mt-16 max-w-[73.188rem] h-[11rem] bg-white rounded-xl flex justify-center flex-col ">
      <div className="mb-4 ml-6">
        <h1 className="text-xl font-semibold ">Dishes category</h1>
      </div>
      <div className="max-w-[73.188] ml-6 h-20 flex flex-wrap items-center gap-3 ">
        <Button key={15} variant="outline" className="rounded-full ">
          All Dishes
        </Button>
        {categories?.map((category) => {
          return (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button
                  key={category._id}
                  variant="outline"
                  className="rounded-full "
                >
                  {category.categoryName}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>edit</DropdownMenuItem>
                <DropdownMenuItem>remove</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          );
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
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="categoryName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Food name</FormLabel>
                      <FormControl>
                        <Input placeholder="Add a new category" {...field} />
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
    </div>
  );
};
