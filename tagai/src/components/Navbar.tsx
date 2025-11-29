import ThemeButton from "./ThemeButton";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center space-x-2 sticky top-0 z-50 bg-background/80 p-3">
      <div className="flex items-center gap-2">
        <h1 className="bg-primary p-3 rounded-lg">🍻</h1>
        <div>
          <h1 className="text-2xl uppercase font-bold tracking-wider text-primary">
            Tagai
          </h1>
          <p className="text-sm tracking-tight">AI Filipino Bartender</p>
        </div>
      </div>

      <ThemeButton />
    </div>
  );
};

export default Navbar;
