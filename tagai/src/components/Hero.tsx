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
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
        <div className="space-y-6">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight text-balance">
            Discover Your
            <span className="block text-primary"> Perfect Drink</span>
          </h1>

          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance">
            Let TAGAI's recommendation engine guide you to the ideal beverage
            tailored to your mood and preferences.
          </p>
        </div>

        <div className="pt-8">
          <button
            onClick={scrollToPreferencesForm}
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
          >
            <span>Explore Recommendations</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
