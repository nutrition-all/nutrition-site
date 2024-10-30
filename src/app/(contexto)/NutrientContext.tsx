import React, { createContext, useContext, useEffect, useState } from "react";
import { NutrientRanges } from "../(types)/TNutrient";

export const nutrientProfiles: Record<string, NutrientRanges> = {
    default: {
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
    },
    protein: {
      calories: { min: 5000, max: 2500 },
      protein: { min: 500, max: 100 },
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
    }
};


interface NutrientContextType {
  profiles: Record<string, NutrientRanges>;
  setProfile: (name: string, ranges: NutrientRanges) => void;
  deleteProfile: (name: string) => void;
}

const NutrientContext = createContext<NutrientContextType | undefined>(undefined);

interface NutrientProviderProps {
  children: React.ReactNode;
}

export const NutrientProvider: React.FC<NutrientProviderProps> = ({ children }) => {
  const [profiles, setProfiles] = useState<Record<string, NutrientRanges>>({});

  useEffect(() => {
    const fetchProfiles = async () => {
      const response = await new Promise((resolve) => setTimeout(() => resolve(nutrientProfiles), 1000));
      setProfiles(response as Record<string, NutrientRanges>);
    };
    fetchProfiles();
  }, []);

  const setProfile = (name: string, ranges: NutrientRanges) => {
    setProfiles((prev) => ({ ...prev, [name]: ranges }));
  };

  const deleteProfile = (name: string) => {
    setProfiles((prev) => {
      const { [name]: _, ...rest } = prev;
      return rest;
    });
  };

  return (
    <NutrientContext.Provider value={{ profiles, setProfile, deleteProfile }}>
      {children}
    </NutrientContext.Provider>
  );
};

export const useNutrientContext = () => {
  const context = useContext(NutrientContext);
  if (!context) {
    throw new Error("useNutrientContext deve ser usado dentro de um NutrientProvider");
  }
  return context;
};
