import { LogoHorizontal } from "@/components/Logo";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const SideBar = () => {
  return (
    <div className="flex flex-col gap-4 bg-slate-700 w-[20%] min-h-[100vh] ">
      <div>
        <LogoHorizontal />
      </div>
      <div className="flex flex-col gap-2">
        <h2>Food Menu</h2>
        <h2>Orders</h2>
        <h2>Setting</h2>
      </div>
    </div>
  );
};

const Layout = (props: Props) => {
  return (
    <div className="flex">
      <SideBar />
      {props.children}
    </div>
  );
};

export default Layout;
