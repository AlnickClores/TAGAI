import type { Drink } from "../../utils/drinkRecommendations";

interface DrinkDetailModalProps {
  drink: Drink | null;
  onClose: () => void;
}

const DrinkDetailModal = ({ drink, onClose }: DrinkDetailModalProps) => {
  const placeholder = "https://placehold.co/400x300";
  if (!drink) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-card border border-slate-200 rounded-lg shadow-2xl max-w-2xl max-h-[75vh] overflow-y-auto w-full">
        {/* name */}
        <div className="sticky top-0 bg-card border-b border-slate-300 p-4 z-50">
          <div className="flex justify-between items-start">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold text-text wrap-break-word mb-1">
                {drink.name}
              </h2>
              {drink.category && (
                <span className="inline-block text-xs font-semibold bg-primary/10 text-primary px-4 py-1.5 rounded-full">
                  {drink.category}
                </span>
              )}
            </div>
            <button
              onClick={onClose}
              className="shrink-0 w-8 h-8 flex items-center justify-center cursor-pointer"
              aria-label="Close"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* image */}
        <div className="relative w-full bg-slate-500/10 overflow-hidden">
          <img
            src={drink.image || placeholder}
            alt={drink.name}
            className="w-full h-full object-contain"
          />
        </div>

        {/* details container */}
        <div className="p-6">
          {/* alcohol level, price */}
          <div className="grid grid-cols-2 gap-3 border-b pb-5 border-slate-300">
            <div>
              <h4 className="text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">
                Alcohol Level
              </h4>
              <p className="text-xl font-semibold text-text">
                {drink.alcoholLevel}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">
                Price
              </h4>
              <p className="text-xl font-semibold text-text">{drink.price}</p>
            </div>
          </div>

          {/* flavor profile */}
          {drink.flavorProfile && drink.flavorProfile.length > 0 && (
            <div className="border-b py-5 border-slate-300">
              <h3 className="text-sm font-medium text-gray-500 mb-2 uppercase tracking-wide">
                Flavor Profile
              </h3>
              <div className="flex flex-wrap gap-2">
                {drink.flavorProfile.map((flavor) => (
                  <span
                    key={flavor}
                    className="text-xs font-medium bg-primary/30 px-3 py-1.5 rounded-md"
                  >
                    {flavor}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* mood */}
          {drink.mood && drink.mood.length > 0 && (
            <div
              className={`py-5 ${drink.category === "mixes" ? "border-b border-slate-300" : ""}`}
            >
              <h3 className="text-sm font-medium text-gray-500 mb-2 uppercase tracking-wide">
                Perfect For
              </h3>
              <div className="flex flex-wrap gap-2">
                {drink.mood.map((m) => (
                  <span
                    key={m}
                    className="text-xs font-medium bg-primary/30 text-text px-3 py-1.5 rounded-md"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* recipe */}
          {drink.recipe && drink.recipe.length > 0 && (
            <div className="border-b py-5 border-slate-300">
              <h3 className="text-sm font-medium text-gray-500 mb-2 uppercase tracking-wide">
                Ingredients
              </h3>
              <ul className="space-y-3">
                {drink.recipe.map((ingredient, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-text flex items-start gap-3"
                  >
                    <span className="block w-2 h-2 rounded-full bg-primary/60 mt-2 shrink-0" />
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* instructions */}
          {drink.instructions && drink.instructions.length > 0 && (
            <div className="py-5">
              <h3 className="text-sm font-medium text-gray-500 mb-2 uppercase tracking-wide">
                Instructions
              </h3>
              <ol className="space-y-3">
                {drink.instructions.map((step, idx) => (
                  <li key={idx} className="text-sm text-text flex gap-3">
                    <span className="flex min-w-7 h-7 rounded-full bg-primary text-white text-xs font-bold items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span className="pt-0.5 leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DrinkDetailModal;
