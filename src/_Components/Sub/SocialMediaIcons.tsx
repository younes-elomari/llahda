import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

const SocialMediaIcons = () => {
  return (
    <div className="flex flex-row gap-3 items-center text-gray-600">
      <FaFacebook size={23} className="cursor-pointer hover:text-gray-800" />
      <FaXTwitter size={23} className="cursor-pointer hover:text-gray-800" />
      <IoLogoYoutube size={23} className="cursor-pointer hover:text-gray-800" />
      <RiInstagramFill
        size={23}
        className="cursor-pointer hover:text-gray-800"
      />
    </div>
  );
};

export default SocialMediaIcons;
