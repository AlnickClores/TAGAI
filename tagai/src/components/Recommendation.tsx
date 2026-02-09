import { useState } from "react";
import type { Drink } from "../utils/drinkRecommendations";
import DrinkCard from "./DrinkCard";
import DrinkDetailModal from "./Modal/DrinkModal";
import BartenderAnimation from "./BartenderAnimation";

interface RecommendationProps {
  recommendations: Drink[];
  loading: boolean;
}

const Recommendation = ({ recommendations, loading }: RecommendationProps) => {
  const [selectedDrink, setSelectedDrink] = useState<Drink | null>(null);
  const topThreeDrinks = recommendations.slice(0, 3);

  if (!loading && topThreeDrinks.length === 0) return null;

  return (
    <div id="recommendationSection" className="mt-36 space-y-8 rounded-xl">
      {loading ? (
        <div className="flex flex-col items-center gap-6 py-20">
          <BartenderAnimation />
          <p className="text-text text-center animate-bounce">
            Generating your perfect drinks...
          </p>
        </div>
      ) : (
        <>
          <div>
            <h2 className="text-3xl font-bold text-text">
              Your Perfect Drinks
            </h2>
            <p className="text-muted-foreground mt-1">
              Click any drink to see full details
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {topThreeDrinks.map((drink, index) => (
              <DrinkCard
                key={`${drink.name}-${index}`}
                drink={drink}
                onClick={() => setSelectedDrink(drink)}
              />
            ))}
          </div>

          <DrinkDetailModal
            drink={selectedDrink}
            onClose={() => setSelectedDrink(null)}
          />
        </>
      )}
    </div>
  );
};

export default Recommendation;
