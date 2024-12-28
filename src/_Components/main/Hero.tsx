import HeroContent from "../Sub/HeroContent";

const Hero = () => {
  return (
    <section className="px-5 md:px-10">
      <div className="relative w-full">
        <img
          src="heroBackground.svg"
          alt="hero background"
          className="w-full h-full object-cover absolute z-[-15]"
        />
        <HeroContent />
      </div>
    </section>
  );
};

export default Hero;
