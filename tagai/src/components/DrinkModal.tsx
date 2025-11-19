import type { Drink } from "../utils/drinkRecommendations";

interface DrinkModalProps {
  drink: Drink | null;
  isOpen: boolean;
  onClose: () => void;
}

const DrinkModal = ({ drink, isOpen, onClose }: DrinkModalProps) => {
  if (!isOpen || !drink) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-card rounded-xl shadow-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-secondary p-6 flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-text">{drink.name}</h2>
            <div className="flex gap-3 mt-2">
              <span className="text-sm font-medium bg-primary text-white px-3 py-1 rounded">
                {drink.alcoholLevel}
              </span>
              <span className="text-sm font-medium text-text">
                {drink.price}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-text hover:text-primary text-2xl font-bold p-2"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {drink.category && (
            <div>
              <span className="text-sm bg-secondary text-white px-3 py-1 rounded">
                {drink.category}
              </span>
            </div>
          )}

          <div>
            <h3 className="font-semibold text-text mb-3">Flavor Profile:</h3>
            <div className="flex flex-wrap gap-2">
              {drink.flavorProfile.map((flavor) => (
                <span
                  key={flavor}
                  className="text-sm bg-accent text-white px-3 py-1 rounded"
                >
                  {flavor}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-text mb-3">Mood:</h3>
            <div className="flex flex-wrap gap-2">
              {drink.mood.map((m) => (
                <span
                  key={m}
                  className="text-sm bg-gray-500 text-white px-3 py-1 rounded"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          {drink.recipe && (
            <div>
              <h3 className="font-semibold text-text mb-3">Recipe:</h3>
              <ul className="list-disc list-inside space-y-2 text-text">
                {drink.recipe.map((ingredient, idx) => (
                  <li key={idx}>{ingredient}</li>
                ))}
              </ul>
            </div>
          )}

          {drink.instructions && (
            <div>
              <h3 className="font-semibold text-text mb-3">Instructions:</h3>
              <ol className="list-decimal list-inside space-y-2 text-text">
                {drink.instructions.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DrinkModal;
