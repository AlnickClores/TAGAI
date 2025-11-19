import { useState } from "react";
import { getRecommendations, type Drink } from "../utils/drinkRecommendations";

const moods = ["Happy", "Relaxed", "Energetic", "Romantic", "Casual"];
const flavors = ["Fruity", "Bold", "Sweet", "Citrus", "Neutral"];
const alcoholLevels = ["Light", "Moderate", "Strong"];
const budgets = ["₱100 - ₱150", "₱150 - ₱250", "₱250 - ₱500", "₱500+"];
const drinkTypes = ["Mixes", "Ready to Drink"];

interface PreferencesFormProps {
  onRecommendations: (drinks: Drink[]) => void;
}

const PreferencesForm = ({ onRecommendations }: PreferencesFormProps) => {
  const [drinkType, setDrinkType] = useState(drinkTypes[0]);
  const [mood, setMood] = useState<string[]>([moods[0]]);
  const [flavor, setFlavor] = useState<string[]>([flavors[0]]);
  const [alcohol, setAlcohol] = useState(alcoholLevels[0]);
  const [budget, setBudget] = useState(budgets[1]);

  const toggleSelection = (
    item: string,
    state: string[],
    setState: (s: string[]) => void
  ) => {
    if (state.includes(item)) {
      setState(state.filter((s) => s !== item));
    } else {
      setState([...state, item]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const preferences = {
      drinkType,
      mood,
      flavor,
      alcohol,
      budget,
    };

    const recommendations = getRecommendations(preferences);
    onRecommendations(recommendations);

    console.log({ preferences, recommendations });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 p-6 mt-15 bg-card rounded-xl shadow-md border border-secondary"
    >
      <h1 className="text-xl font-semibold text-text">
        Tell Me About Your Preferred Drink
      </h1>

      <div className="flex flex-col space-y-3">
        <label className="font-medium text-sm">Drink Type</label>
        <div className="flex gap-6">
          {drinkTypes.map((type) => (
            <label
              key={type}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="drinkType"
                value={type}
                checked={drinkType === type}
                onChange={(e) => setDrinkType(e.target.value)}
                className="w-4 h-4 cursor-pointer"
              />
              <span className="text-sm">{type}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex flex-col space-y-3">
        <label className="font-medium text-sm">What's your mood?</label>
        <div className="grid grid-cols-2 gap-3">
          {moods.map((m) => (
            <label key={m} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={mood.includes(m)}
                onChange={() => toggleSelection(m, mood, setMood)}
                className="w-4 h-4 cursor-pointer"
              />
              <span className="text-sm">{m}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex flex-col space-y-3">
        <label className="font-medium text-sm">Favorite flavor?</label>
        <div className="grid grid-cols-2 gap-3">
          {flavors.map((f) => (
            <label key={f} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={flavor.includes(f)}
                onChange={() => toggleSelection(f, flavor, setFlavor)}
                className="w-4 h-4 cursor-pointer"
              />
              <span className="text-sm">{f}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <label className="font-medium text-sm">Alcohol level?</label>
        <select
          value={alcohol}
          onChange={(e) => setAlcohol(e.target.value)}
          className="w-full p-3 rounded-lg bg-background text-text"
        >
          {alcoholLevels.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col space-y-2">
        <label className="font-medium text-sm">Your budget?</label>
        <select
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="w-full p-3 rounded-lg bg-background text-text"
        >
          {budgets.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="w-full p-3 bg-primary text-white rounded-lg font-semibold shadow"
      >
        Get My Drink
      </button>
    </form>
  );
};

export default PreferencesForm;
