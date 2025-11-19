import type { Drink } from "../utils/drinkRecommendations";

interface DrinkCardProps {
  drink: Drink;
  onClick: () => void;
}

const DrinkCard = ({ drink, onClick }: DrinkCardProps) => {
  return (
    <div
      onClick={onClick}
      className="group relative overflow-hidden border border-secondary rounded-xl shadow-md bg-card hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/5 pointer-events-none" />

      <div className="relative p-6 h-full flex flex-col justify-between">
        <div>
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-text group-hover:text-primary transition-colors">
              {drink.name}
            </h3>
          </div>

          {drink.category && (
            <div className="mb-4">
              <span className="inline-block text-xs font-semibold bg-primary/10 text-primary px-3 py-1.5 rounded-full">
                {drink.category}
              </span>
            </div>
          )}
        </div>

        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-xs text-muted-foreground font-medium mb-1">
                Strength
              </p>
              <span className="inline-block text-sm font-semibold bg-primary text-white px-2.5 py-1 rounded-lg">
                {drink.alcoholLevel}
              </span>
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium mb-1">
                Price
              </p>
              <p className="text-sm font-semibold text-text">{drink.price}</p>
            </div>
          </div>

          <div className="pt-2 border-t border-secondary/50">
            <div className="flex items-center text-xs font-medium text-primary group-hover:translate-x-1 transition-transform">
              View details <span className="ml-1">→</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinkCard;
