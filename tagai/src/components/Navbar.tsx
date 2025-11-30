import ThemeButton from "./ThemeButton";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center sticky top-0 z-50 bg-background/80 backdrop-blur-sm p-3 md:p-4 gap-2 md:gap-4">
      <a href="/" className="flex items-center gap-2 md:gap-3 group">
        <div className="flex flex-col">
          <h1 className="text-xl md:text-2xl font-bold tracking-wide text-primary transition-colors duration-200 group-hover:text-primary/80">
            TAGAI
          </h1>
          <p className="text-xs md:text-sm text-muted-foreground leading-tight hidden sm:block">
            AI Bartender
          </p>
        </div>
      </a>

      <ThemeButton />
    </div>
  );
};

export default Navbar;
