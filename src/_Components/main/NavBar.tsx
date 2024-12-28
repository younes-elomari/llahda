import SocialMediaIcons from "../Sub/SocialMediaIcons";

const NavBar = () => {
  return (
    <nav className="flex flex-row gap-4 items-center justify-between py-5 px-10 md:px-20">
      <SocialMediaIcons />
      <img src="/llahda.svg" alt="website logo" width={75} height={25} />
    </nav>
  );
};

export default NavBar;
