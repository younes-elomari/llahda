const NavBar = () => {
  return (
    <nav className="flex flex-row gap-4 items-center justify-between py-5">
      <div className="flex flex-row gap-3 items-center">
        <div className="w-[20px] h-[20px] bg-green-500 cursor-pointer"></div>
        <div className="w-[20px] h-[20px] bg-green-500 cursor-pointer"></div>
        <div className="w-[20px] h-[20px] bg-green-500 cursor-pointer"></div>
        <div className="w-[20px] h-[20px] bg-green-500 cursor-pointer"></div>
      </div>
      <img src="/Logo.svg" alt="website logo" width={200} height={60} />
    </nav>
  );
};

export default NavBar;
