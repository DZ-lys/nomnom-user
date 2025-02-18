const Headie = () => {
  return (
    <header className="bg-[#18181b] w-[100vw] h-[4.25rem] flex justify-between px-[5.5rem] py-3 ">
      <div className="flex w-[9.1rem] h-[2.8rem] gap-[10px] items-center ">
        <div>
          <img src="nomnom-Logo.png" alt="" />
        </div>
        <div>
          <img src="nomnom-title.png" alt="" />
        </div>
      </div>
      <div className="flex items-center gap-2 ">
        <button className="text-[#18181b] bg-[#f4f4f5] rounded-full px-3 py-2 flex justify-center items-center h-9 ">
          Sign up
        </button>
        <button className="text-[#fafafa] bg-[#ef4444] rounded-full px-3 py-2 flex justify-center items-center h-9 ">
          Log in
        </button>
      </div>
    </header>
  );
};

export default Headie;
