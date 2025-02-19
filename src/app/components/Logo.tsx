export const LogoHorizontal = () => {
  return (
    <div className="w-36 h-11 flex items-center gap-2 ">
      <div className="overflow-hidden w-11 h-9 ">
        <img src="nomnom-Logo.png" alt="" />
      </div>
      <div>
        <div className="flex">
          <h4 className="text-xl font-semibold text-[#fafafa] tracking-[-0.5px] ">
            Nom
          </h4>
          <h4 className="text-xl font-semibold text-[#ef4444] tracking-[-0.5px] ">
            Nom
          </h4>
        </div>
        <div>
          <p className="text-[#f4f4f5c5] text-xs font-normal ">
            swift delivery
          </p>
        </div>
      </div>
    </div>
  );
};

export const LogoVertical = () => {
  return (
    <div className="w-[5.5rem] h-[5.9rem] ">
      <div className="overflow-hidden w-11 h-9 m-auto mb-3 ">
        <img src="nomnom-Logo.png" alt="" />
      </div>
      <div className="m-auto">
        <div className="flex">
          <h4 className="text-xl font-semibold text-[#fafafa] tracking-[-0.5px] ">
            Nom
          </h4>
          <h4 className="text-xl font-semibold text-[#ef4444] tracking-[-0.5px] ">
            Nom
          </h4>
        </div>
        <div className="ml-1">
          <p className="text-[#f4f4f5c5] text-xs font-normal ">
            swift delivery
          </p>
        </div>
      </div>
    </div>
  );
};
