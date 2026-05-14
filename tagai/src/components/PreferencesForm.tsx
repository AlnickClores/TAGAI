import { useState } from "react";
import { getRecommendations, type Drink } from "../utils/drinkRecommendations";
import { icons } from "../assets/icons/icons";

const drinkTypes = [
  {
    type: "Mixes",
    color: "#8B5CF6",
    icon: icons.readyToDrinkIcon,
  },
  {
    type: "Ready to Drink",
    color: "#F59E0B",
    icon: icons.mixesIcon,
  },
];

const moods = [
  {
    label: "Happy",
    color: "#FACC15",
    icon: icons.happyIcon,
  },
  {
    label: "Relaxed",
    color: "#38BDF8",
    icon: icons.relaxedIcon,
  },
  {
    label: "Energetic",
    color: "#F97316",
    icon: icons.energeticIcon,
  },
  {
    label: "Romantic",
    color: "#EC4899",
    icon: icons.romanticIcon,
  },
  {
    label: "Casual",
    color: "#2DD4BF",
    icon: icons.casualIcon,
  },
];

const flavors = [
  {
    label: "Fruity",
    color: "#FB7185",
    icon: icons.fruityIcon,
  },
  {
    label: "Bold",
    color: "#EF4444",
    icon: icons.boldIcon,
  },
  {
    label: "Sweet",
    color: "#F472B6",
    icon: icons.sweetIcon,
  },
  {
    label: "Citrus",
    color: "#84CC16",
    icon: icons.citrusIcon,
  },
  {
    label: "Neutral",
    color: "#38BDF8",
    icon: icons.neutralIcon,
  },
];

const alcoholLevels = [
  {
    level: "Light",
    icon: icons.light,
    color: "#22C55E",
  },
  {
    level: "Moderate",
    icon: icons.moderate,
    color: "#FBBF24",
  },
  {
    level: "Strong",
    icon: icons.strong,
    color: "#F87171",
  },
];

const budgets = ["₱100 - 150", "₱150 - 250", "₱250 - 500", "₱500+"];

interface PreferencesFormProps {
  onRecommendations: (drinks: Drink[]) => void;
  setLoading: (value: boolean) => void;
}

const PreferencesForm = ({
  onRecommendations,
  setLoading,
}: PreferencesFormProps) => {
  const [drinkType, setDrinkType] = useState(drinkTypes[0].type);
  const [mood, setMood] = useState<string[]>([moods[0].label]);
  const [flavor, setFlavor] = useState<string[]>([flavors[0].label]);
  const [alcohol, setAlcohol] = useState(alcoholLevels[0].level);
  const [budget, setBudget] = useState(budgets[0]);

  const toggleSelection = (
    item: string,
    state: string[],
    setState: (s: string[]) => void,
  ) => {
    if (state.includes(item)) {
      if (state.length > 1) {
        setState(state.filter((s) => s !== item));
      }
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

  const handleToggleMood = (label: string) => {
    toggleSelection(label, mood, setMood);
  };

  const handleToggleFlavor = (label: string) => {
    toggleSelection(label, flavor, setFlavor);
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
      className="glass-panel rounded-3xl px-5 py-8 md:px-8 md:py-10"
    >
      <div className="form-layout">
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="tagai-kicker">Personalize your pour</span>
            <h2 className="text-2xl md:text-3xl font-semibold display-font">
              What are we pouring today?
            </h2>
            <p className="tagai-muted text-sm md:text-base">
              Pick a vibe and we will tailor a drink lineup to match.
            </p>
          </div>

          <div className="form-actions">
            <button type="submit" className="w-full tagai-button">
              Show my drink
            </button>
            <p className="form-helper">
              Multi-select mood and flavor to fine tune the blend.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {/* drink type */}
          <div className="form-section flex flex-col space-y-3">
            <label className="font-semibold text-lg">Drink Type</label>
            <div className="flex flex-wrap gap-2">
              {drinkTypes.map((type) => (
                <button
                  type="button"
                  key={type.type}
                  onClick={() => handleSetDrinkType(type.type)}
                  className={`chip cursor-pointer transition-all ${
                    type.type === drinkType ? "font-semibold" : ""
                  }`}
                  style={
                    type.type === drinkType
                      ? {
                          borderColor: type.color,
                          backgroundColor: `${type.color}0D`,
                          color: type.color,
                        }
                      : undefined
                  }
                >
                  <div style={{ color: type.color }}>
                    {type.type === "Mixes"
                      ? icons.mixesIcon
                      : icons.readyToDrinkIcon}
                  </div>
                  <span className="text-xs md:text-sm">{type.type}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="form-section grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* mood */}
            <div className="flex flex-col space-y-3">
              <label className="font-semibold text-lg">Mood</label>

              <div className="flex flex-wrap gap-2">
                {moods.map((m) => {
                  const selected = mood.includes(m.label);

                  return (
                    <button
                      key={m.label}
                      type="button"
                      onClick={() => handleToggleMood(m.label)}
                      className={`chip cursor-pointer transition-all ${
                        selected ? "font-semibold" : ""
                      }`}
                      style={
                        selected
                          ? {
                              borderColor: m.color,
                              backgroundColor: `${m.color}0D`,
                              color: m.color,
                            }
                          : undefined
                      }
                    >
                      <span className="text-sm">{m.icon}</span>
                      <span className="text-xs md:text-sm">{m.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* flavor */}
            <div className="flex flex-col space-y-3">
              <label className="font-semibold text-lg">Flavor Preference</label>

              <div className="flex flex-wrap gap-2">
                {flavors.map((f) => {
                  const selected = flavor.includes(f.label);

                  return (
                    <button
                      key={f.label}
                      type="button"
                      onClick={() => handleToggleFlavor(f.label)}
                      className={`chip cursor-pointer transition-all ${
                        selected ? "font-semibold" : ""
                      }`}
                      style={
                        selected
                          ? {
                              borderColor: f.color,
                              backgroundColor: `${f.color}0D`,
                              color: f.color,
                            }
                          : undefined
                      }
                    >
                      <span className="text-sm">{f.icon}</span>
                      <span className="text-xs md:text-sm">{f.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* alcohol level */}
          <div className="form-section flex flex-col space-y-3">
            <label className="font-semibold text-lg">Booze Level</label>
            <div className="flex flex-wrap gap-2">
              {alcoholLevels.map((a) => (
                <button
                  key={a.level}
                  type="button"
                  onClick={() => setAlcohol(a.level)}
                  className={`chip cursor-pointer transition-all ${
                    a.level === alcohol ? "font-semibold" : ""
                  }`}
                  style={
                    a.level === alcohol
                      ? {
                          borderColor: a.color,
                          backgroundColor: `${a.color}0D`,
                          color: a.color,
                        }
                      : undefined
                  }
                >
                  <span
                    style={{
                      color: a.color,
                    }}
                  >
                    {a.icon}
                  </span>
                  <span className="text-xs md:text-sm">{a.level}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="form-section flex flex-col space-y-3">
            {/* budget */}
            <label className="font-semibold text-lg">Budget</label>
            <div className="flex flex-wrap gap-2">
              {budgets.map((b) => (
                <button
                  key={b}
                  type="button"
                  onClick={() => setBudget(b)}
                  className={`chip cursor-pointer transition-all ${
                    budget === b ? "font-semibold" : ""
                  }`}
                  style={
                    budget === b
                      ? {
                          borderColor: "#F59E0B",
                          backgroundColor: `#F59E0B0D`,
                          color: "#F59E0B",
                        }
                      : undefined
                  }
                >
                  <span className="text-xs md:text-sm">{b}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PreferencesForm;
