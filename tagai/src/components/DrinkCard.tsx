import type { Drink } from "../utils/drinkRecommendations";

interface DrinkCardProps {
  drink: Drink;
  onClick: () => void;
}

const DrinkCard = ({ drink, onClick }: DrinkCardProps) => {
  return (
    <div
      onClick={onClick}
      className="group relative overflow-hidden border border-secondary rounded-xl bg-card hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col h-full"
    >
      <div className="relative w-full overflow-hidden bg-secondary/5">
        <img
          src="https://placehold.co/400x300"
          alt={drink.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="relative flex flex-col grow p-5">
        {/* Header section with title and category */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-text group-hover:text-primary transition-colors mb-2 line-clamp-2">
            {drink.name}
          </h3>

          {drink.category && (
            <span className="inline-block text-xs font-semibold bg-primary/10 text-primary px-3 py-1.5 rounded-full">
              {drink.category}
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4 mb-5 py-4 border-t border-b border-secondary/30">
          <div>
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-2">
              Strength
            </p>
            <span className="inline-block text-sm font-semibold bg-primary text-white px-3 py-1.5 rounded-lg">
              {drink.alcoholLevel}
            </span>
          </div>
          <div>
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-2">
              Price
            </p>
            <p className="text-lg font-bold text-text">{drink.price}</p>
          </div>
        </div>

        <div className="mt-auto">
          <button
            className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-primary group-hover:text-primary group-hover:gap-3 transition-all py-2"
            aria-label={`View details for ${drink.name}`}
          >
            View details
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DrinkCard;
