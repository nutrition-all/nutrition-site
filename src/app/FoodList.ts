export interface SelectedFood extends Food {
  quantity: number;
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

export type NutrientRange = {
  min: number;
  max: number;
};

export type NutrientRanges = {
  [K in keyof Omit<SelectedFood, "id" | "name" | "quantity">]: NutrientRange;
};