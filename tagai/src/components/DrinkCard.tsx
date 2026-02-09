import type { Drink } from "../utils/drinkRecommendations";

interface DrinkCardProps {
  drink: Drink;
  onClick: () => void;
}

const DrinkCard = ({ drink, onClick }: DrinkCardProps) => {
  const placeholder = "https://placehold.co/400x300";

  return (
    <div
      onClick={onClick}
      className="group relative overflow-hidden border border-slate-200 rounded-lg bg-card hover:shadow-lg hover:scale-101 transition-all duration-300 cursor-pointer flex flex-col h-full shadow-md"
    >
      <div className="relative w-full overflow-hidden bg-secondary/5">
        <img
          src={drink.image || placeholder}
          alt={drink.name}
          className="w-full h-48 object-cover"
        />
      </div>

      <div className="relative flex flex-col grow p-5">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-text group-hover:text-primary transition-colors mb-3 line-clamp-2">
            {drink.name}
          </h3>

          {drink.category && (
            <span className="text-xs font-semibold border border-primary bg-primary/10 text-primary px-3 py-1.5 rounded-full">
              {drink.category}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-300">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 text-muted-foreground uppercase tracking-widest font-medium">
              Strength
            </span>
            <span className="text-sm font-semibold text-foreground mt-1">
              {drink.alcoholLevel}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-xs text-gray-500 text-muted-foreground uppercase tracking-widest font-medium">
              Price
            </span>
            <span className="text-sm font-semibold text-foreground mt-1">
              {drink.price}
            </span>
          </div>
        </div>

        <div className="mt-auto">
          <button
            className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-primary rounded-full bg-primary/10 border border-primary group-hover:text-primary group-hover:gap-3 transition-all py-2 cursor-pointer"
            aria-label={`View details for ${drink.name}`}
          >
            View details
            <span className="group-hover:translate-x-0.3 transition-transform">
              →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DrinkCard;
