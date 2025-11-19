import { useState } from "react";
import type { Drink } from "../utils/drinkRecommendations";
import DrinkCard from "./DrinkCard";
import DrinkDetailModal from "./Modal/DrinkModal";

interface RecommendationProps {
  recommendations: Drink[];
}

const Recommendation = ({ recommendations }: RecommendationProps) => {
  const [selectedDrink, setSelectedDrink] = useState<Drink | null>(null);

  const topThreeDrinks = recommendations.slice(0, 3);

  if (topThreeDrinks.length === 0) {
    return (
      <div className="border-2 border-secondary border-dashed p-8 rounded-xl shadow-md bg-card/50">
        <div>
          <h1 className="text-lg font-medium text-text">
            Fill in your preferences and I will recommend the perfect drink for
            you.
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-text">Your Perfect Drinks</h2>
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
    </div>
  );
};

export default Recommendation;
