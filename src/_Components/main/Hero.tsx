import HeroContent from "../Sub/HeroContent";

const Hero = () => {
  return (
    <section>
      <div className="relative w-full">
        <img
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
