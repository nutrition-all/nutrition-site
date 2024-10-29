"use client"
import { useState } from "react";
import { nutrientProfiles } from "../NutrientBar";
import ProfileManager from "../ProfileManager";

export default function ProfilesPage() {
  const [profiles, setProfiles] = useState(Object.entries(nutrientProfiles).map(([name, ranges]) => ({ name, ranges })));

  const handleSaveProfile = (newProfile:any) => {
    setProfiles([...profiles, newProfile]);
  };

  const handleUpdateProfile = (name: any, updatedProfile: any) => {
    setProfiles(profiles.map((p) => (p.name === name ? updatedProfile : p)));
  };

  const handleDeleteProfile = (name: any) => {
    setProfiles(profiles.filter((p) => p.name !== name));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-6">Gerenciar Perfis Nutricionais</h1>
      <ProfileManager
        profiles={profiles}
        onSave={handleSaveProfile}
        onUpdate={handleUpdateProfile}
        onDelete={handleDeleteProfile}
      />
    </div>
  );
}