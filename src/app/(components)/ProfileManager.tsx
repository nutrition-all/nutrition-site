"use client"
import React, { useEffect, useState } from "react";
import { NutrientRange, NutrientRanges } from "../(types)/TNutrient";
import { useNutrientContext } from "../(contexto)/NutrientContext";
import { Profile } from "../(types)/TProfile";


interface ProfileManagerProps {
}

const ProfileManager: React.FC<ProfileManagerProps> = () => {
  const [profileName, setProfileName] = useState("");
  const { profiles, setProfile, deleteProfile } = useNutrientContext();
  const [ranges, setRanges] = useState<NutrientRanges>(profiles.default);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (profiles.default) {
      setRanges(profiles.default);
    }
  }, [profiles.default]);

  const handleInputChange = (nutrient: keyof NutrientRanges, field: keyof NutrientRange, value: number) => {
    setRanges((prevRanges) => ({
      ...prevRanges,
      [nutrient]: {
        ...prevRanges?.[nutrient],
        [field]: value,
      },
    }) as NutrientRanges);
  };

  const handleSaveProfile = () => {
    if (profileName.trim() && ranges) {
      setProfile(profileName, ranges);
      setProfileName("");
      setRanges(profiles.default);
    }
  };

  const handleEditProfile = (profile: Profile) => {
    setProfileName(profile.name);
    setRanges(profile.ranges);
    setIsEditing(true);
  };

  if (!ranges) return <p>Carregando...</p>;

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
  {Object.keys(profiles).map((name) => (
    <div key={name} className="flex justify-between items-center p-2 bg-white rounded shadow">
      <span className="font-medium text-gray-700">{name}</span>
      <div>
        <button
          onClick={() => handleEditProfile({ name, ranges: profiles[name] })}
          className="px-3 py-1 bg-yellow-500 text-white rounded mr-2 hover:bg-yellow-600"
        >
          Editar
        </button>
        <button
          onClick={() => deleteProfile(name)}
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