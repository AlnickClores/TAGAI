import { icons } from "../assets/icons/icons";
import { useTheme } from "../context/ThemeContext";

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <label
      className="
        w-[50px] h-[26px] bg-[#111] dark:bg-secondary rounded-full 
        flex items-center justify-between p-[5px]
        cursor-pointer relative
      "
    >
      <input
        type="checkbox"
        className="absolute opacity-0"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />

      {icons.sun}
      {icons.moon}

      <span
        className={`
          absolute bg-white dark:bg-primary w-[22px] h-[22px] rounded-full top-0.5 left-0.5
          transition-transform duration-200
          ${theme === "dark" ? "translate-x-6" : "translate-x-0"}
        `}
      />
    </label>
  );
};

export default ThemeButton;
