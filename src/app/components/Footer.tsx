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
      <div className="flex w-[90%] bg-slate-700 m-auto gap-[13.75rem] ">
        <div className="flex flex-col gap-3 items-center  ">
          <div className="w-[2.9rem] h-[2.33rem] ">
            <img src="nomnom-logo.png" alt="" />
          </div>
          <div>
            <div className="flex items-center  ">
              <h4 className="text-xl font-semibold text-[#fafafa] tracking-[-0.5px] ">
                Nom
              </h4>
              <h4 className="text-xl font-semibold text-[#ef4444] tracking-[-0.5px] ">
                Nom
              </h4>
            </div>
            <div className="flex items-center">
              <p className="text-[#f4f4f5] text-xs font-normal ">
                swift delivery
              </p>
            </div>
          </div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
