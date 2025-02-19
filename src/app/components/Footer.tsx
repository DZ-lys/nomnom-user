import { LogoVertical } from "./Logo";

const Footer = () => {
  return (
    <div className="bg-[#18181b] w-screen h-[47.2rem] flex flex-col justify-around ">
      <div className="bg-[#ef4444] w-screen pl-24 py-6 flex items-center gap-[2.13rem] ">
        {Array.from({ length: 5 }).map((_, index) => {
          return (
            <h2 key={index} className="text-white text-3xl font-semibold  ">
              Fresh fast delivered
            </h2>
          );
        })}
      </div>
      <div className="flex w-[90%]  m-auto gap-[13.75rem] ">
        <LogoVertical />
        <div className="[&_p]:text-[#fafafa] [&_p]:text-base [&_h6]:text-[#71717a] [&_h6]:text-base flex gap-[112px] ">
          <div className="flex flex-col gap-4 ">
            <h6>NOMNOM</h6>
            <p>Home</p>
            <p>Contact us</p>
            <p>Delivery zone</p>
          </div>
          <div className="flex gap-[56px]  ">
            <div className="flex flex-col gap-4 ">
              <h6>MENU</h6>
              <p>Appetizers</p>
              <p>Salads</p>
              <p>Pizzas</p>
              <p>Lunch favorites</p>
              <p>Main dishes</p>
            </div>
            <div className="flex flex-col gap-4 mt-[2.5rem] ">
              <p>Side dish</p>
              <p>Brunch</p>
              <p>Desserts</p>
              <p>Beverages</p>
              <p>Fish & Sea foods</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h6>Follow us</h6>
            <div className="flex">
              <div>
                <img src="Social icon.png" alt="" />
              </div>
              <div>
                <img src="Instagram.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
