import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PreferencesForm from "./components/PreferencesForm";
import Recommendation from "./components/Recommendation";
import Footer from "./components/Footer";
import type { Drink } from "./utils/drinkRecommendations";

function App() {
  const [recommendations, setRecommendations] = useState<Drink[]>([]);

  const handleRecommendations = (drinks: Drink[]) => {
    setRecommendations(drinks);
  };

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4">
        <Navbar />
        <div className="flex flex-col gap-7">
          <Hero />
          <PreferencesForm onRecommendations={handleRecommendations} />
          <Recommendation recommendations={recommendations} />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
