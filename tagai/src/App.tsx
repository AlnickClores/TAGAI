import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PreferencesForm from "./components/PreferencesForm";
import Recommendation from "./components/Recommendation";
import Footer from "./components/Footer";
import type { Drink } from "./utils/drinkRecommendations";

function App() {
  const [recommendations, setRecommendations] = useState<Drink[]>([]);
  const [loading, setLoading] = useState(false);
  const handleRecommendations = (drinks: Drink[]) => {
    setRecommendations(drinks);
  };

  return (
    <div className="app-background min-h-screen">
      <div className="app-shell">
        <Navbar />
        <main className="flex flex-col gap-16 md:gap-20">
          <Hero />
          <PreferencesForm
            setLoading={setLoading}
            onRecommendations={handleRecommendations}
          />
          <Recommendation loading={loading} recommendations={recommendations} />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
