import { LogoHorizontal } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { getEventListeners } from "events";
import { LayoutDashboard, SettingsIcon, TruckIcon } from "lucide-react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const SideBar = () => {
  const selected = () => {};

  return (
    <div className="flex flex-col gap-8 w-[20%] min-h-[100vh] py-9 px-7 ">
      <div>
        <div className="w-36 h-11 flex items-center gap-2 ">
          <div className="overflow-hidden w-11 h-9 ">
            <img src="nomnom-Logo.png" alt="" />
          </div>
          <div>
            <div className="flex">
              <h4 className="text-xl font-semibold text-[#000000] tracking-[-0.5px] ">
                Nom
              </h4>
              <h4 className="text-xl font-semibold text-[#000000] tracking-[-0.5px] ">
                Nom
              </h4>
            </div>
            <div>
              <p className="text-[#303031c5] text-xs font-normal ">
                swift delivery
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <Button className="w-[10rem] h-10 rounded-full px-6 gap-[0.62rem] text-black bg-white shadow-none hover:bg-white ">
          <LayoutDashboard />
          Food menu
        </Button>
        <Button className="w-[10rem] h-10 rounded-full px-6 gap-[0.62rem] text-black bg-white shadow-none hover:bg-white ">
          <TruckIcon />
          Orders
        </Button>
        <Button className="w-[10rem] h-10 rounded-full px-6 gap-[0.62rem] text-black bg-white shadow-none hover:bg-white ">
          <SettingsIcon />
          Settings
        </Button>
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
