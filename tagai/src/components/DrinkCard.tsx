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
            <span className="hover:translate-x-0.2 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="-0.415 -0.415 20 20"
                id="Left-Arrow--Streamline-Guidance-Free"
                height="16"
                width="16"
              >
                <desc>
                  Left Arrow Streamline Icon: https://streamlinehq.com
                </desc>
                <path
                  stroke="#8d3cc3"
                  d="M12.780000000000001 3.9937500000000004c0 0.5926725 0.5854837500000001 1.4776875000000003 1.1781562500000002 2.220525 0.7620075000000001 0.9585 1.6725825 1.79479125 2.7165487500000003 2.4329925C17.457480000000004 9.12571875 18.406395000000003 9.585 19.17 9.585m0 0c-0.7636050000000001 0 -1.7133187500000002 0.45928125000000003 -2.4952950000000005 0.9377325000000001 -1.04396625 0.6390000000000001 -1.9545412500000001 1.4752912500000002 -2.7165487500000003 2.43219375C13.365483750000001 13.6985625 12.780000000000001 14.585175000000003 12.780000000000001 15.176250000000001m6.390000000000001 -5.5912500000000005H0"
                  strokeWidth="1.2"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DrinkCard;
