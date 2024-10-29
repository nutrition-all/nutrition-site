"use client"
import React, { useState } from "react";
import { SelectedFood } from "./FoodList";

interface Profile {
  name: string;
  ranges: NutrientRanges;
}

interface ProfileManagerProps {
  profiles: Profile[];
  onSave: (profile: Profile) => void;
  onUpdate: (name: string, updatedProfile: Profile) => void;
  onDelete: (name: string) => void;
}

export type NutrientRange = {
  min: number;
  max: number;
};

export type NutrientRanges = {
  [K in keyof Omit<SelectedFood, "id" | "name" | "quantity">]: NutrientRange;
};

export const defaultNutrientRanges: NutrientRanges = {
  calories: { min: 1500, max: 2500 },
  protein: { min: 50, max: 100 },
  carbs: { min: 225, max: 325 },
  fat: { min: 44, max: 78 },
  cholesterol: { min: 0, max: 300 },
  fiber: { min: 25, max: 38 },
  ashes: { min: 0, max: 10 },
  calcium: { min: 800, max: 1300 },
  magnesium: { min: 310, max: 420 },
  manganese: { min: 1.8, max: 2.3 },
  phosphorus: { min: 700, max: 1250 },
  iron: { min: 8, max: 18 },
  sodium: { min: 1500, max: 2300 },
  potassium: { min: 3500, max: 4700 },
  copper: { min: 0.9, max: 1.3 },
  zinc: { min: 8, max: 11 },
  retinol: { min: 700, max: 900 },
  re: { min: 700, max: 900 },
  rae: { min: 700, max: 900 },
  thiamine: { min: 1.1, max: 1.2 },
  riboflavin: { min: 1.1, max: 1.3 },
  pyridoxine: { min: 1.3, max: 2.0 },
  niacin: { min: 14, max: 16 },
  vitaminC: { min: 75, max: 90 },
  saturatedFat: { min: 0, max: 20 },
  monounsaturatedFat: { min: 0, max: 20 },
  polyunsaturatedFat: { min: 0, max: 20 },
  fat12_0: { min: 0, max: 1 },
  fat14_0: { min: 0, max: 1 },
  fat16_0: { min: 0, max: 1 },
  fat18_0: { min: 0, max: 1 },
  fat20_0: { min: 0, max: 1 },
  fat22_0: { min: 0, max: 1 },
  fat24_0: { min: 0, max: 1 },
  fat14_1: { min: 0, max: 1 },
  fat16_1: { min: 0, max: 1 },
  fat18_1: { min: 0, max: 1 },
  fat20_1: { min: 0, max: 1 },
  fat18_2n6: { min: 0, max: 1 },
  fat18_3n3: { min: 0, max: 1 },
  fat20_4: { min: 0, max: 1 },
  fat20_5: { min: 0, max: 1 },
  fat22_5: { min: 0, max: 1 },
  fat22_6: { min: 0, max: 1 },
  fat18_1t: { min: 0, max: 1 },
  fat18_2t: { min: 0, max: 1 },
  tryptophan: { min: 0, max: 1 },
  threonine: { min: 0, max: 1 },
  isoleucine: { min: 0, max: 1 },
  leucine: { min: 0, max: 1 },
  lysine: { min: 0, max: 1 },
  methionine: { min: 0, max: 1 },
  cystine: { min: 0, max: 1 },
  phenylalanine: { min: 0, max: 1 },
  tyrosine: { min: 0, max: 1 },
  valine: { min: 0, max: 1 },
  arginine: { min: 0, max: 1 },
  histidine: { min: 0, max: 1 },
  alanine: { min: 0, max: 1 },
  asparticAcid: { min: 0, max: 1 },
  glutamicAcid: { min: 0, max: 1 },
  glycine: { min: 0, max: 1 },
  proline: { min: 0, max: 1 },
  serine: { min: 0, max: 1 },
};
const ProfileManager: React.FC<ProfileManagerProps> = ({ profiles, onSave, onUpdate, onDelete }) => {
  const [profileName, setProfileName] = useState("");
  const [ranges, setRanges] = useState<NutrientRanges>(defaultNutrientRanges);
  const [isEditing, setIsEditing] = useState(false);

  // Ajuste aqui: usa `keyof NutrientRanges` para o parâmetro `nutrient`
  const handleInputChange = (nutrient: keyof NutrientRanges, field: keyof NutrientRange, value: number) => {
    setRanges((prevRanges) => ({
      ...prevRanges,
      [nutrient]: {
        ...prevRanges[nutrient],
        [field]: value,
      },
    }));
  };

  const handleSaveProfile = () => {
    if (profileName.trim()) {
      const profile = { name: profileName, ranges };
      isEditing ? onUpdate(profileName, profile) : onSave(profile);
      setProfileName("");
      setRanges(defaultNutrientRanges);
      setIsEditing(false);
    }
  };

  const handleEditProfile = (profile: Profile) => {
    setProfileName(profile.name);
    setRanges(profile.ranges);
    setIsEditing(true);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        {isEditing ? "Editar Perfil" : "Criar Novo Perfil"}
      </h2>
      <input
        type="text"
        placeholder="Nome do Perfil"
        value={profileName}
        onChange={(e) => setProfileName(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      <div className="space-y-4">
        {Object.keys(ranges).map((nutrient) => (
          <div key={nutrient} className="flex gap-4 items-center">
            <span className="flex-1 capitalize text-gray-700 font-medium">{nutrient}</span>
            <input
              type="number"
              placeholder="Min"
              value={ranges[nutrient as keyof NutrientRanges]?.min || ""}
              onChange={(e) =>
                handleInputChange(nutrient as keyof NutrientRanges, "min", parseFloat(e.target.value))
              }
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="number"
              placeholder="Max"
              value={ranges[nutrient as keyof NutrientRanges]?.max || ""}
              onChange={(e) =>
                handleInputChange(nutrient as keyof NutrientRanges, "max", parseFloat(e.target.value))
              }
              className="p-2 border border-gray-300 rounded"
            />
          </div>
        ))}
      </div>

      <button
        onClick={handleSaveProfile}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {isEditing ? "Atualizar Perfil" : "Salvar Perfil"}
      </button>

      <h3 className="mt-6 text-lg font-semibold text-gray-800">Perfis Salvos</h3>
      <div className="mt-2 space-y-2">
        {profiles.map((profile) => (
          <div key={profile.name} className="flex justify-between items-center p-2 bg-white rounded shadow">
            <span className="font-medium text-gray-700">{profile.name}</span>
            <div>
              <button
                onClick={() => handleEditProfile(profile)}
                className="px-3 py-1 bg-yellow-500 text-white rounded mr-2 hover:bg-yellow-600"
              >
                Editar
              </button>
              <button
                onClick={() => onDelete(profile.name)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Deletar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileManager;