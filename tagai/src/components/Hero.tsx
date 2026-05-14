import BartenderAnimation from "./BartenderAnimation";

const Hero = () => {
  const scrollToPreferencesForm = () => {
    const element = document.getElementById("preferencesForm");

    if (element) {
      const offset = 120;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full overflow-hidden mt-10 lg:mt-5">
      <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] min-h-[70vh] px-2 md:px-6">
        <div className="space-y-6 text-left">
          <span className="tagai-kicker">Drink Recommendation AI</span>
          <h1 className="section-title display-font text-text">
            Discover your next signature pour, crafted for your mood.
          </h1>

          <p className="text-base md:text-lg tagai-muted max-w-xl leading-relaxed">
            TAGAI blends flavor, vibe, and budget into a curated drink lineup so
            every sip feels intentional.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-4">
            <button onClick={scrollToPreferencesForm} className="tagai-button">
              Explore recommendations
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.6"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 5.25v13.5m0 0 6-6m-6 6-6-6"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="hero-card">
            <BartenderAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
