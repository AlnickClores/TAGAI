import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { toggleTheme } = useTheme();
  return (
    <div className="flex items-center justify-between space-x-2 mt-10">
      <div className="flex items-center gap-2">
        <h1 className="bg-primary p-3 rounded-lg">🍻</h1>
        <div>
          <h1 className="text-2xl uppercase font-bold tracking-wider text-primary">
            Tagai
          </h1>
          <p className="text-sm tracking-tight">AI Filipino Bartender</p>
        </div>
      </div>

      <button
        className="bg-primary rounded-md my-4 p-1 text-text"
        onClick={toggleTheme}
      >
        theme
      </button>
    </div>
  );
};

export default Navbar;
