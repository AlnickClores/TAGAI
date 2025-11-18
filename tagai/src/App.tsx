import { useEffect, useState } from "react";
import { useTheme } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const { toggleTheme } = useTheme();

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4">
        <Navbar />
        <button
          className="bg-primary rounded-md my-4 p-2"
          onClick={toggleTheme}
        >
          Toggle Theme
        </button>

        <h1>Current Width: {width}</h1>
        <Footer />
      </div>
    </div>
  );
}

export default App;
