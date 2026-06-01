import hero from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section
      className="relative h-[85vh] md:h-[80vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 h-full flex flex-col justify-center items-start text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          Unlimited movies, TV shows and more
        </h1>
        <p className="mt-4 text-lg text-white/80">
          Starts at $7.99. Cancel anytime.
        </p>
        <button className="mt-6 inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded shadow">
          Restart Your Membership
        </button>
      </div>
    </section>
  );
};

export default Hero;
