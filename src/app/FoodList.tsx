import React from "react";
export interface SelectedFood extends Food {
  quantity: number;
}
interface FoodListProps {
  foods: Food[];
  onAdd: (food: Food) => void;
}
export interface Food {
  id: number;
  name: string;
  calories: number | null;
  carbs: number | null;
  protein: number | null;
  fat: number | null;
  cholesterol: number | null;
  fiber: number | null;
  ashes: number | null;
  calcium: number | null;
  magnesium: number | null;
  manganese: number | null;
  phosphorus: number | null;
  iron: number | null;
  sodium: number | null;
  potassium: number | null;
  copper: number | null;
  zinc: number | null;
  retinol: number | null;
  re: number | null;
  rae: number | null;
  thiamine: number | null;
  riboflavin: number | null;
  pyridoxine: number | null;
  niacin: number | null;
  vitaminC: number | null;
  saturatedFat: number | null;
  monounsaturatedFat: number | null;
  polyunsaturatedFat: number | null;
  fat12_0: number | null;
  fat14_0: number | null;
  fat16_0: number | null;
  fat18_0: number | null;
  fat20_0: number | null;
  fat22_0: number | null;
  fat24_0: number | null;
  fat14_1: number | null;
  fat16_1: number | null;
  fat18_1: number | null;
  fat20_1: number | null;
  fat18_2n6: number | null;
  fat18_3n3: number | null;
  fat20_4: number | null;
  fat20_5: number | null;
  fat22_5: number | null;
  fat22_6: number | null;
  fat18_1t: number | null;
  fat18_2t: number | null;
  tryptophan: number | null;
  threonine: number | null;
  isoleucine: number | null;
  leucine: number | null;
  lysine: number | null;
  methionine: number | null;
  cystine: number | null;
  phenylalanine: number | null;
  tyrosine: number | null;
  valine: number | null;
  arginine: number | null;
  histidine: number | null;
  alanine: number | null;
  asparticAcid: number | null;
  glutamicAcid: number | null;
  glycine: number | null;
  proline: number | null;
  serine: number | null;
}

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
}

const TotalNutrition: React.FC<TotalNutritionProps> = ({ selectedFoods }) => {
  const total = calculateTotalNutrition(selectedFoods);

  return (
    <div>
      <h2>Resumo Nutricional</h2>
      {/* <p>Umidade: {total.moisture.toFixed(2)} %</p>
      <p>Energia: {total.calories.toFixed(2)} kcal</p>
      <p>Proteína: {total.protein.toFixed(2)} g</p>
      <p>Lipídeos: {total.fat.toFixed(2)} g</p> */}
      {/* <p>Colesterol: {total.cholesterol.toFixed(2)} mg</p>
      <p>Carboidratos: {total.carbs.toFixed(2)} g</p>
      <p>Fibras: {total.fiber.toFixed(2)} g</p>
      <p>Cinzas: {total.ashes.toFixed(2)} g</p>
      <p>Cálcio: {total.calcium.toFixed(2)} mg</p> */}
      <p>Magnésio: {total.magnesium.toFixed(2)} mg</p>
      <p>Manganês: {total.manganese.toFixed(2)} mg</p>
      <p>Fósforo: {total.phosphorus.toFixed(2)} mg</p>
      <p>Ferro: {total.iron.toFixed(2)} mg</p>
      <p>Sódio: {total.sodium.toFixed(2)} mg</p>
      <p>Potássio: {total.potassium.toFixed(2)} mg</p>
      <p>Cobre: {total.copper.toFixed(2)} mg</p>
      <p>Zinco: {total.zinc.toFixed(2)} mg</p>
      <p>Retinol: {total.retinol.toFixed(2)} mcg</p>
      <p>RE: {total.re.toFixed(2)} mcg</p>
      <p>RAE: {total.rae.toFixed(2)} mcg</p>
      <p>Tiamina: {total.thiamine.toFixed(2)} mg</p>
      <p>Riboflavina: {total.riboflavin.toFixed(2)} mg</p>
      <p>Piridoxina: {total.pyridoxine.toFixed(2)} mg</p>
      <p>Niacina: {total.niacin.toFixed(2)} mg</p>
      <p>Vitamina C: {total.vitaminC.toFixed(2)} mg</p>
      <p>Gorduras Saturadas: {total.saturatedFat.toFixed(2)} g</p>
      <p>Gorduras Monoinsaturadas: {total.monounsaturatedFat.toFixed(2)} g</p>
      <p>Gorduras Poliinsaturadas: {total.polyunsaturatedFat.toFixed(2)} g</p>
      <p>12:0: {total.fat12_0.toFixed(2)} g</p>
      <p>14:0: {total.fat14_0.toFixed(2)} g</p>
      <p>16:0: {total.fat16_0.toFixed(2)} g</p>
      <p>18:0: {total.fat18_0.toFixed(2)} g</p>
      <p>20:0: {total.fat20_0.toFixed(2)} g</p>
      <p>22:0: {total.fat22_0.toFixed(2)} g</p>
      <p>24:0: {total.fat24_0.toFixed(2)} g</p>
      <p>14:1: {total.fat14_1.toFixed(2)} g</p>
      <p>16:1: {total.fat16_1.toFixed(2)} g</p>
      <p>18:1: {total.fat18_1.toFixed(2)} g</p>
      <p>20:1: {total.fat20_1.toFixed(2)} g</p>
      <p>18:2 n-6: {total.fat18_2n6.toFixed(2)} g</p>
      <p>18:3 n-3: {total.fat18_3n3.toFixed(2)} g</p>
      <p>20:4: {total.fat20_4.toFixed(2)} g</p>
      <p>20:5: {total.fat20_5.toFixed(2)} g</p>
      <p>22:5: {total.fat22_5.toFixed(2)} g</p>
      <p>22:6: {total.fat22_6.toFixed(2)} g</p>
      <p>18:1t: {total.fat18_1t.toFixed(2)} g</p>
      <p>18:2t: {total.fat18_2t.toFixed(2)} g</p>
      <p>Triptofano: {total.tryptophan.toFixed(2)} g</p>
      <p>Treonina: {total.threonine.toFixed(2)} g</p>
      <p>Isoleucina: {total.isoleucine.toFixed(2)} g</p>
      <p>Leucina: {total.leucine.toFixed(2)} g</p>
      <p>Lisina: {total.lysine.toFixed(2)} g</p>
      <p>Metionina: {total.methionine.toFixed(2)} g</p>
      <p>Cistina: {total.cystine.toFixed(2)} g</p>
      <p>Fenilalanina: {total.phenylalanine.toFixed(2)} g</p>
      <p>Tirosina: {total.tyrosine.toFixed(2)} g</p>
      <p>Valina: {total.valine.toFixed(2)} g</p>
      <p>Arginina: {total.arginine.toFixed(2)} g</p>
      <p>Histidina: {total.histidine.toFixed(2)} g</p>
      <p>Alanina: {total.alanine.toFixed(2)} g</p>
      <p>Ácido Aspártico: {total.asparticAcid.toFixed(2)} g</p>
      <p>Ácido Glutâmico: {total.glutamicAcid.toFixed(2)} g</p>
      <p>Glicina: {total.glycine.toFixed(2)} g</p>
      <p>Prolina: {total.proline.toFixed(2)} g</p>
      <p>Serina: {total.serine.toFixed(2)} g</p>
    </div>
  );
};

export default TotalNutrition;
