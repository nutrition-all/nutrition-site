"use client";
import Papa from "papaparse";
import { useEffect, useState } from "react";
import { Food, SelectedFood } from "./FoodList";
import SelectedFoods from "./SelectedFoods";
import TotalNutrition from "./TotalNutrition";
import { nutrientProfiles } from "./NutrientBar";
import FoodSelect from "./FoodSelect";
import Link from "next/link";

const convertTrToNull = (value: string) =>
  value === "Tr" ? null : parseFloat(value);

const App: React.FC = () => {
  const [selectedFoods, setSelectedFoods] = useState<SelectedFood[]>([]);
  const [foods, setFoods] = useState<Food[]>([]);
  const [nutrientRanges, setNutrientRanges] = useState(nutrientProfiles.default);
  const [selectedProfile, setSelectedProfile] = useState("default");

  useEffect(() => {
    const loadCSV = async () => {
      const response = await fetch("./taco_consolidado.csv");
      const reader = response.body?.getReader();
      const result = await reader?.read();
      const decoder = new TextDecoder("utf-8");
      const csvData = decoder.decode(result?.value);

      Papa.parse(csvData, {
        header: true,
        skipEmptyLines: true,
        complete: (results: any) => {
          const data = results.data as any[];
          const formattedFoods: Food[] = data.map((item) => ({
            id: parseInt(item.ID),
            name: item.Alimento,
            moisture: convertTrToNull(item["Umidade (%)"]),
            calories: convertTrToNull(item["Energia (kcal)"]),
            protein: convertTrToNull(item["Proteína (g)"]),
            fat: convertTrToNull(item["Lipídeos (g)"]),
            cholesterol: convertTrToNull(item["Colesterol (mg)"]),
            carbs: convertTrToNull(item["Carboidrato (g)"]),
            fiber: convertTrToNull(item["Alimentar (g)"]),
            ashes: convertTrToNull(item["Cinzas (g)"]),
            calcium: convertTrToNull(item["Cálcio (mg)"]),
            magnesium: convertTrToNull(item["Magnésio (mg)"]),
            manganese: convertTrToNull(item["Manganês (mg)"]),
            phosphorus: convertTrToNull(item["Fósforo (mg)"]),
            iron: convertTrToNull(item["Ferro (mg)"]),
            sodium: convertTrToNull(item["Sódio (mg)"]),
            potassium: convertTrToNull(item["Potássio (mg)"]),
            copper: convertTrToNull(item["Cobre (mg)"]),
            zinc: convertTrToNull(item["Zinco (mg)"]),
            retinol: convertTrToNull(item["Retinol (mcg)"]),
            re: convertTrToNull(item["RE (mcg)"]),
            rae: convertTrToNull(item["RAE (mcg)"]),
            thiamine: convertTrToNull(item["Tiamina (mg)"]),
            riboflavin: convertTrToNull(item["Riboflavina (mg)"]),
            pyridoxine: convertTrToNull(item["Piridoxina (mg)"]),
            niacin: convertTrToNull(item["Niacina (mg)"]),
            vitaminC: convertTrToNull(item["C (mg)"]),
            saturatedFat: convertTrToNull(item["Saturados (g)"]),
            monounsaturatedFat: convertTrToNull(item["Monoinsaturados (g)"]),
            polyunsaturatedFat: convertTrToNull(item["Poliinsaturados (g)"]),
            fat12_0: convertTrToNull(item["12:0 (g)"]),
            fat14_0: convertTrToNull(item["14:0 (g)"]),
            fat16_0: convertTrToNull(item["16:0 (g)"]),
            fat18_0: convertTrToNull(item["18:0 (g)"]),
            fat20_0: convertTrToNull(item["20:0 (g)"]),
            fat22_0: convertTrToNull(item["22:0 (g)"]),
            fat24_0: convertTrToNull(item["24:0 (g)"]),
            fat14_1: convertTrToNull(item["14:1 (g)"]),
            fat16_1: convertTrToNull(item["16:1 (g)"]),
            fat18_1: convertTrToNull(item["18:1 (g)"]),
            fat20_1: convertTrToNull(item["20:1 (g)"]),
            fat18_2n6: convertTrToNull(item["18:2 n-6 (g)"]),
            fat18_3n3: convertTrToNull(item["18:3 n-3 (g)"]),
            fat20_4: convertTrToNull(item["20:4 (g)"]),
            fat20_5: convertTrToNull(item["20:5 (g)"]),
            fat22_5: convertTrToNull(item["22:5 (g)"]),
            fat22_6: convertTrToNull(item["22:6 (g)"]),
            fat18_1t: convertTrToNull(item["18:1t (g)"]),
            fat18_2t: convertTrToNull(item["18:2t (g)"]),
            tryptophan: convertTrToNull(item["Triptofano (g)"]),
            threonine: convertTrToNull(item["Treonina (g)"]),
            isoleucine: convertTrToNull(item["Isoleucina (g)"]),
            leucine: convertTrToNull(item["Leucina (g)"]),
            lysine: convertTrToNull(item["Lisina (g)"]),
            methionine: convertTrToNull(item["Metionina (g)"]),
            cystine: convertTrToNull(item["Cistina (g)"]),
            phenylalanine: convertTrToNull(item["Fenilalanina (g)"]),
            tyrosine: convertTrToNull(item["Tirosina (g)"]),
            valine: convertTrToNull(item["Valina (g)"]),
            arginine: convertTrToNull(item["Arginina (g)"]),
            histidine: convertTrToNull(item["Histidina (g)"]),
            alanine: convertTrToNull(item["Alanina (g)"]),
            asparticAcid: convertTrToNull(item["Ácido Aspártico (g)"]),
            glutamicAcid: convertTrToNull(item["Ácido Glutâmico (g)"]),
            glycine: convertTrToNull(item["Glicina (g)"]),
            proline: convertTrToNull(item["Prolina (g)"]),
            serine: convertTrToNull(item["Serina (g)"]),
          }));
          setFoods(formattedFoods);
        },
      });
    };

    loadCSV();
  }, []);

  // const handleAddFood = (food: Food) => {
  //   const exists = selectedFoods.find((f) => f.id === food.id);
  //   if (!exists) {
  //     setSelectedFoods([...selectedFoods, { ...food, quantity: 100 }]);
  //   }
  // };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    setSelectedFoods(
      selectedFoods.map((f: any) => (f.id === id ? { ...f, quantity } : f))
    );
  };

  const handleAddFood = (food: Food) => {
    const exists = selectedFoods.find((f) => f.id === food.id);
    if (!exists) {
      setSelectedFoods([...selectedFoods, { ...food, quantity: 100 }]);
    }
  };

  const handleProfileChange = (profileKey: string) => {
    setSelectedProfile(profileKey);
    setNutrientRanges(nutrientProfiles[profileKey]);
    setSelectedFoods((prevFoods) => [...prevFoods]);
  };

  return (
    <div className="container mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6">
      <div className="w-full lg:w-1/3 flex flex-col gap-4 p-4 bg-gray-50 rounded-lg shadow-lg">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-700">Seleção de Alimentos</h2>
          {/* <Link href="/profiles" className="text-blue-500 hover:underline">
            Gerenciar Perfis
          </Link> */}
          <select
            value={selectedProfile}
            onChange={(e) => handleProfileChange(e.target.value)}
            className="border border-gray-300 rounded p-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="default">Padrão</option>
            <option value="protein">Alta Proteína</option>
          </select>
        </div>
        <FoodSelect foods={foods} onAdd={handleAddFood} />
        <SelectedFoods
          selectedFoods={selectedFoods}
          onUpdateQuantity={(id, quantity) =>
            setSelectedFoods(
              selectedFoods.map((f) => (f.id === id ? { ...f, quantity } : f))
            )
          }
          onRemove={(id) => setSelectedFoods(selectedFoods.filter((f) => f.id !== id))}
        />
      </div>
      <div className="w-full lg:w-2/3 p-4 bg-gray-50 rounded-lg shadow-lg overflow-auto">
        <h2 className="text-lg font-semibold text-gray-700">Resumo Nutricional</h2>
        <TotalNutrition key={selectedProfile} selectedFoods={selectedFoods} nutrientRanges={nutrientRanges} />
      </div>
    </div>
  );
};

export default App;
