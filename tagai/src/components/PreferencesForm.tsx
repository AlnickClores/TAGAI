import { useState } from "react";

const moods = ["Happy", "Relaxed", "Energetic", "Romantic", "Casual"];
const flavors = ["Fruity", "Bitter", "Sweet", "Citrus", "Neutral"];
const alcoholLevels = ["Light", "Moderate", "Strong"];
const budgets = ["₱100 - ₱150", "₱150 - ₱250", "₱250 - ₱500", "₱500+"];

const PreferencesForm = () => {
  const [mood, setMood] = useState(moods[0]);
  const [flavor, setFlavor] = useState(flavors[0]);
  const [alcohol, setAlcohol] = useState(alcoholLevels[0]);
  const [budget, setBudget] = useState(budgets[1]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ mood, flavor, alcohol, budget });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 p-6 mt-15 bg-card rounded-xl shadow-md border border-secondary"
    >
      <h1 className="text-xl font-semibold text-text">
        Tell Me About Your Preferred Drink
      </h1>

      <div className="flex flex-col space-y-2">
        <label className="font-medium text-sm">What's your mood?</label>
        <select
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          className="w-full p-3 rounded-lg bg-background text-text"
        >
          {moods.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col space-y-2">
        <label className="font-medium text-sm ">Favorite flavor?</label>
        <select
          value={flavor}
          onChange={(e) => setFlavor(e.target.value)}
          className="w-full p-3 rounded-lg bg-background text-text"
        >
          {flavors.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
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
        className="w-full p-3 bg-primary text-text rounded-lg font-semibold shadow"
      >
        Get My Drink
      </button>
    </form>
  );
};

export default PreferencesForm;
