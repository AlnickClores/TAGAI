import type { Drink } from "../../utils/drinkRecommendations";

interface DrinkDetailModalProps {
  drink: Drink | null;
  onClose: () => void;
}

const DrinkDetailModal = ({ drink, onClose }: DrinkDetailModalProps) => {
  if (!drink) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-card border border-secondary rounded-2xl shadow-2xl max-w-2xl max-h-[90vh] overflow-y-auto w-full">
        <div className="sticky top-0 bg-card border-b border-secondary/50 p-6">
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1 min-w-0">
              <h2 className="text-3xl font-bold text-text mb-3 wrap-break-word">
                {drink.name}
              </h2>
              {drink.category && (
                <span className="inline-block text-xs font-semibold bg-primary/10 text-primary px-3 py-1.5 rounded-full">
                  {drink.category}
                </span>
              )}
            </div>
            <button
              onClick={onClose}
              className="shrink-0 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-secondary/50 transition-colors"
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

        <div className="relative w-full h-64 bg-secondary/20 overflow-hidden">
          <img
            src="https://placehold.co/400x300"
            alt={drink.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 space-y-8">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-secondary/30 rounded-xl p-4">
              <h4 className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                Alcohol Level
              </h4>
              <p className="text-2xl font-bold text-text">
                {drink.alcoholLevel}
              </p>
            </div>
            <div className="bg-secondary/30 rounded-xl p-4">
              <h4 className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                Price
              </h4>
              <p className="text-2xl font-bold text-text">{drink.price}</p>
            </div>
          </div>

          {drink.flavorProfile && drink.flavorProfile.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-text mb-4 uppercase tracking-wide">
                Flavor Profile
              </h3>
              <div className="flex flex-wrap gap-2">
                {drink.flavorProfile.map((flavor) => (
                  <span
                    key={flavor}
                    className="text-xs font-medium bg-accent/20 text-accent px-3 py-2 rounded-full"
                  >
                    {flavor}
                  </span>
                ))}
              </div>
            </div>
          )}

          {drink.mood && drink.mood.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-text mb-4 uppercase tracking-wide">
                Perfect For
              </h3>
              <div className="flex flex-wrap gap-2">
                {drink.mood.map((m) => (
                  <span
                    key={m}
                    className="text-xs font-medium bg-secondary/40 text-text px-3 py-2 rounded-full"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          )}

          {drink.recipe && drink.recipe.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-text mb-4 uppercase tracking-wide">
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

          {drink.instructions && drink.instructions.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-text mb-4 uppercase tracking-wide">
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

        <div className="sticky bottom-0 bg-card border-t border-secondary/50 p-6">
          <button
            onClick={onClose}
            className="w-full bg-primary text-white px-4 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all active:scale-95"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DrinkDetailModal;
