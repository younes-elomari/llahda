import SocialMediaIcons from "../Sub/SocialMediaIcons";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="flex flex-row gap-4 items-center justify-between py-5 px-10 md:px-20"
    >
      <SocialMediaIcons />
      <img src="/llahda.svg" alt="website logo" width={75} height={25} />
    </motion.nav>
  );
};

export default NavBar;
