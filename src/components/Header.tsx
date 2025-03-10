import { Button } from "@/components/ui/button";
import { LogoHorizontal } from "./Logo";

const Headie = () => {
  return (
    <header className="bg-[#18181b] w-[100vw] h-[4.25rem] flex justify-between px-[5.5rem] py-3 ">
      <LogoHorizontal />
      <div className="flex items-center gap-2 ">
        <Button className="text-[#18181b] bg-[#f4f4f5] rounded-full px-3 py-2 flex justify-center items-center h-9 hover:bg-[#f4f4f5c7] ">
          Sign up
        </Button>
        <Button className="text-[#fafafa] bg-[#ef4444] rounded-full px-3 py-2 flex justify-center items-center h-9 hover:bg-[#ef4444b7] ">
          Log in
        </Button>
      </div>
    </header>
  );
};

export default Headie;
