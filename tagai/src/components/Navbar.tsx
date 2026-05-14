import ThemeButton from "./ThemeButton";

const Navbar = () => {
  return (
    <nav className="sticky top-4 z-50">
      <div className="glass-panel flex justify-between items-center px-4 py-3 md:px-6 md:py-4 rounded-full gap-4">
        <a href="/" className="flex items-center gap-3 group">
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-bold tracking-tight text-primary transition-colors duration-200 group-hover:text-primary/80">
              TAGAI
            </h1>
            <p className="text-xs md:text-sm tagai-muted leading-tight hidden sm:block">
              AI Bartender Lab
            </p>
          </div>
        </a>

        <ThemeButton />
      </div>
    </nav>
  );
};

export default Navbar;
