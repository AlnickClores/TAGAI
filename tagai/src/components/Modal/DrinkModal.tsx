import type { Drink } from "../../utils/drinkRecommendations";

interface DrinkDetailModalProps {
  drink: Drink | null;
  onClose: () => void;
}

const DrinkDetailModal = ({ drink, onClose }: DrinkDetailModalProps) => {
  const placeholder = "https://placehold.co/400x300";
  if (!drink) return null;

  return (
    <div className="fixed inset-0 drink-modal-backdrop flex items-center justify-center p-4 z-50">
      <div className="drink-modal-panel max-w-3xl max-h-[85vh] overflow-y-auto w-full">
        <div className="drink-modal-header sticky top-0 p-5 md:p-6 z-50">
          <div className="flex flex-wrap gap-4 items-start justify-between">
            <div className="flex-1 min-w-0 space-y-2">
              <span className="tagai-kicker">Signature pour</span>
              <h2 className="text-2xl md:text-3xl font-semibold display-font text-text wrap-break-word">
                {drink.name}
              </h2>
              <div className="flex flex-wrap items-center gap-2">
                {drink.category && (
                  <span className="drink-modal-pill text-xs font-semibold px-4 py-1.5 rounded-full">
                    {drink.category}
                  </span>
                )}
                <span className="tagai-muted text-xs">Curated by TAGAI</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="shrink-0 w-9 h-9 rounded-full border border-black/10 flex items-center justify-center cursor-pointer hover:bg-black/5 transition-colors"
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

        <div className="drink-modal-hero relative w-full aspect-video overflow-hidden flex items-center justify-center p-5">
          <img
            src={drink.image || placeholder}
            alt={drink.name}
            className="max-w-full max-h-full w-auto h-auto object-contain"
          />
        </div>

        <div className="p-5 md:p-7 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="drink-modal-metric p-4">
              <h4 className="text-xs font-semibold tagai-muted mb-2 uppercase tracking-wide">
                Alcohol Level
              </h4>
              <p className="text-2xl font-semibold text-text">
                {drink.alcoholLevel}
              </p>
            </div>

            <div className="drink-modal-metric p-4">
              <h4 className="text-xs font-semibold tagai-muted mb-2 uppercase tracking-wide">
                Price
              </h4>
              <p className="text-2xl font-semibold text-text">{drink.price}</p>
            </div>
          </div>

          {drink.flavorProfile && drink.flavorProfile.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-semibold tagai-muted uppercase tracking-wide">
                Flavor Profile
              </h3>
              <div className="flex flex-wrap gap-2">
                {drink.flavorProfile.map((flavor) => (
                  <span key={flavor} className="drink-modal-tag">
                    {flavor}
                  </span>
                ))}
              </div>
            </div>
          )}

          {drink.mood && drink.mood.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-semibold tagai-muted uppercase tracking-wide">
                Perfect For
              </h3>
              <div className="flex flex-wrap gap-2">
                {drink.mood.map((m) => (
                  <span key={m} className="drink-modal-tag">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          )}

          {(drink.recipe && drink.recipe.length > 0) ||
          (drink.instructions && drink.instructions.length > 0) ? (
            <div className="border-t drink-modal-divider pt-6 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
              {drink.recipe && drink.recipe.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold tagai-muted uppercase tracking-wide">
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
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold tagai-muted uppercase tracking-wide">
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
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default DrinkDetailModal;
