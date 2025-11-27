import { useState } from "react";
import { getRecommendations, type Drink } from "../utils/drinkRecommendations";
import { icons } from "../assets/icons/icons";

const moods = ["Happy", "Relaxed", "Energetic", "Romantic", "Casual"];
const flavors = ["Fruity", "Bold", "Sweet", "Citrus", "Neutral"];
const alcoholLevels = ["Light", "Moderate", "Strong"];
const budgets = ["₱100 - ₱150", "₱150 - ₱250", "₱250 - ₱500", "₱500+"];
const drinkTypes = ["Mixes", "Ready to Drink"];

interface PreferencesFormProps {
  onRecommendations: (drinks: Drink[]) => void;
  setLoading: (value: boolean) => void;
}

const PreferencesForm = ({
  onRecommendations,
  setLoading,
}: PreferencesFormProps) => {
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

  const scrolToRecommendations = () => {
    const element = document.getElementById("recommendationSection");

    if (element) {
      const offset = 120;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleSetDrinkType = (type: string) => {
    setDrinkType(type);
  };

  const handleToggleMood = (m: string) => {
    toggleSelection(m, mood, setMood);
  };

  const handleToggleFlavor = (f: string) => {
    toggleSelection(f, flavor, setFlavor);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      scrolToRecommendations();
    }, 1000);

    const preferences = {
      drinkType,
      mood,
      flavor,
      alcohol,
      budget,
    };

    setTimeout(() => {
      const recommendations = getRecommendations(preferences);
      onRecommendations(recommendations);
      setLoading(false);
    }, 2500);
  };

  return (
    <form
      id="preferencesForm"
      onSubmit={handleSubmit}
      className="space-y-8 p-8 mt-15 bg-card rounded-2xl shadow-lg border border-secondary"
    >
      <h1 className="text-xl font-semibold text-text">
        Tell Me About Your Preferred Drink
      </h1>

      <div className="flex flex-col space-y-3">
        <label className="font-medium text-sm">Drink Type</label>
        <div className="flex gap-6">
          {drinkTypes.map((type) => (
            <button
              type="button"
              key={type}
              onClick={() => handleSetDrinkType(type)}
              className={`flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer transition-all
          bg-secondary border 
          ${
            type === drinkType
              ? "border-accent font-bold"
              : "border-transparent opacity-50 hover:opacity-80"
          }
        `}
            >
              <div>
                {type === "Mixes" ? icons.mixesIcon : icons.readyToDrinkIcon}
              </div>
              <span className="text-sm">{type}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 space-y-3 space-x-3 ">
        <div className="flex flex-col space-y-3">
          <label className="font-medium text-sm">What's your mood?</label>

          <div className="grid grid-cols-2 gap-3">
            {moods.map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => handleToggleMood(m)}
                className={`
          flex items-center gap-3 px-3 py-2 rounded-xl transition-all border
          bg-secondary cursor-pointer
          ${
            mood.includes(m)
              ? "border-accent bg-primary/10"
              : "border-transparent opacity-50 hover:opacity-80"
          }
        `}
              >
                <span>
                  {m === "Happy"
                    ? icons.happyIcon
                    : m === "Relaxed"
                    ? icons.relaxedIcon
                    : m === "Energetic"
                    ? icons.energeticIcon
                    : m === "Romantic"
                    ? icons.romanticIcon
                    : icons.casualIcon}
                </span>

                <span className="text-sm">{m}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col space-y-3">
          <label className="font-medium text-sm">Desired flavor?</label>
          <div className="grid grid-cols-2 gap-3">
            {flavors.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => handleToggleFlavor(f)}
                className={`
          flex items-center gap-3 px-3 py-2 rounded-xl transition-all border
          bg-secondary cursor-pointer
          ${
            flavor.includes(f)
              ? "border-accent bg-primary/10 font-bold"
              : "border-transparent opacity-50 hover:opacity-80"
          }
        `}
              >
                <span>
                  {f === "Fruity"
                    ? icons.fruityIcon
                    : f === "Sweet"
                    ? icons.sweetIcon
                    : f === "Neutral"
                    ? icons.neutralIcon
                    : f === "Bold"
                    ? icons.boldIcon
                    : icons.citrusIcon}
                </span>

                <span className="text-sm">{f}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-3">
        <label className="font-medium text-sm">Alcohol level?</label>
        <div className="grid grid-cols-3 gap-3">
          {alcoholLevels.map((a) => (
            <button
              key={a}
              type="button"
              onClick={() => setAlcohol(a)}
              className={`
          flex items-center justify-center px-3 py-2 rounded-xl transition-all border
          bg-secondary cursor-pointer
          ${
            alcohol === a
              ? "border-accent bg-primary/10 font-bold"
              : "border-transparent opacity-50 hover:opacity-80"
          }
        `}
            >
              <span>{a}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col space-y-3">
        <label className="font-medium text-sm">Your budget?</label>
        <div className="grid grid-cols-2 gap-3">
          {budgets.map((b) => (
            <button
              key={b}
              type="button"
              onClick={() => setBudget(b)}
              className={`
          flex items-center justify-center px-3 py-2 rounded-xl transition-all border
          bg-secondary cursor-pointer
          ${
            budget === b
              ? "border-accent bg-primary/10 font-bold"
              : "border-transparent opacity-50 hover:opacity-80"
          }
        `}
            >
              <span>{b}</span>
            </button>
          ))}
        </div>
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
