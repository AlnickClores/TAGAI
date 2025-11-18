import Navbar from "./components/Navbar";
import PreferencesForm from "./components/PreferencesForm";
import Recommendation from "./components/Recommendation";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4">
        <Navbar />
        <div className="flex flex-col gap-7">
          <PreferencesForm />
          <Recommendation />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
