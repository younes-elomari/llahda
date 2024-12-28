import HeroContent from "../Sub/HeroContent";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section>
      <div className="relative w-full">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          src="heroBackground.jpg"
          alt="hero background"
          className="w-full h-full object-cover absolute z-[-15]"
        />
        <HeroContent />
      </div>
    </section>
  );
};

export default Hero;
