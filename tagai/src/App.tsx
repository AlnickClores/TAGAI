import { useTheme } from "./context/ThemeContext";

function App() {
  const { toggleTheme } = useTheme();
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="text-5xl text-text">TAGAI</h1>
        <button
          className="bg-primary rounded-md my-4 p-2"
          onClick={toggleTheme}
        >
          Toggle Theme
        </button>
        <div className="bg-card p-5">
          <h1 className="bg-primary text-text">Primary</h1>
          <h1 className="bg-secondary">Secondary</h1>
          <h1 className="bg-accent">Accent</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
