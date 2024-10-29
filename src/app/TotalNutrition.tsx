import { NutrientRanges, SelectedFood } from "./FoodList";
import NutrientBar from "./NutrientBar";

const calculateTotalNutrition = (selectedFoods: SelectedFood[]) => {
  const total: Record<keyof Omit<SelectedFood, "id" | "name">, number> = {
    quantity: 0,
    calories: 0,
    protein: 0,
    fat: 0,
    cholesterol: 0,
    carbs: 0,
    fiber: 0,
    ashes: 0,
    calcium: 0,
    magnesium: 0,
    manganese: 0,
    phosphorus: 0,
    iron: 0,
    sodium: 0,
    potassium: 0,
    copper: 0,
    zinc: 0,
    retinol: 0,
    re: 0,
    rae: 0,
    thiamine: 0,
    riboflavin: 0,
    pyridoxine: 0,
    niacin: 0,
    vitaminC: 0,
    saturatedFat: 0,
    monounsaturatedFat: 0,
    polyunsaturatedFat: 0,
    fat12_0: 0,
    fat14_0: 0,
    fat16_0: 0,
    fat18_0: 0,
    fat20_0: 0,
    fat22_0: 0,
    fat24_0: 0,
    fat14_1: 0,
    fat16_1: 0,
    fat18_1: 0,
    fat20_1: 0,
    fat18_2n6: 0,
    fat18_3n3: 0,
    fat20_4: 0,
    fat20_5: 0,
    fat22_5: 0,
    fat22_6: 0,
    fat18_1t: 0,
    fat18_2t: 0,
    tryptophan: 0,
    threonine: 0,
    isoleucine: 0,
    leucine: 0,
    lysine: 0,
    methionine: 0,
    cystine: 0,
    phenylalanine: 0,
    tyrosine: 0,
    valine: 0,
    arginine: 0,
    histidine: 0,
    alanine: 0,
    asparticAcid: 0,
    glutamicAcid: 0,
    glycine: 0,
    proline: 0,
    serine: 0,
  };

  selectedFoods.forEach((food) => {
    const multiplier = food.quantity / 100;
    Object.keys(total).forEach((key) => {
      const nutrient = key as keyof Omit<
        SelectedFood,
        "id" | "name" | "quantity"
      >;
      total[nutrient] += (food[nutrient] ?? 0) * multiplier;
    });
  });

  return total;
};

interface TotalNutritionProps {
  selectedFoods: SelectedFood[];
  nutrientRanges: NutrientRanges;
}

const TotalNutrition: React.FC<TotalNutritionProps> = ({ selectedFoods, nutrientRanges  }) => {
  const total = calculateTotalNutrition(selectedFoods);

  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow-lg max-w-full mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Resumo Nutricional</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(nutrientRanges).map(([key, { min, max }]) => (
          <NutrientBar
            key={key}
            name={key.charAt(0).toUpperCase() + key.slice(1)}
            value={total[key as keyof typeof total] || 0}
            min={min}
            max={max}
          />
        ))}
      </div>
    </div>
  );
};

export default TotalNutrition;
