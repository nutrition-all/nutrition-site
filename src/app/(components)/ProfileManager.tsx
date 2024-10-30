"use client"
import React, { useEffect, useState } from "react";
import { NutrientRange, NutrientRanges } from "../(types)/TNutrient";
import { useNutrientContext } from "../(contexto)/NutrientContext";
import { Profile } from "../(types)/TProfile";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";


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

  if (!ranges) return <Typography>Carregando...</Typography>;

  return (
    <Box p={4} component={Paper} elevation={3} maxWidth="600px" mx="auto">
      <Typography variant="h5" mb={2} fontWeight="bold">
        {isEditing ? "Editar Perfil" : "Criar Novo Perfil"}
      </Typography>
      
      <TextField
        label="Nome do Perfil"
        value={profileName}
        onChange={(e) => setProfileName(e.target.value)}
        fullWidth
        variant="outlined"
        margin="normal"
      />

      <Box mb={2}>
        {Object.keys(ranges).map((nutrient) => (
          <Grid container key={nutrient} alignItems="center" spacing={2} mb={1}>
            <Grid item xs={4}>
              <Typography variant="body2" fontWeight="medium">
                {nutrient.charAt(0).toUpperCase() + nutrient.slice(1)}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <TextField
                type="number"
                label="Min"
                value={ranges[nutrient as keyof NutrientRanges]?.min || ""}
                onChange={(e) =>
                  handleInputChange(nutrient as keyof NutrientRanges, "min", parseFloat(e.target.value))
                }
                fullWidth
                size="small"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                type="number"
                label="Max"
                value={ranges[nutrient as keyof NutrientRanges]?.max || ""}
                onChange={(e) =>
                  handleInputChange(nutrient as keyof NutrientRanges, "max", parseFloat(e.target.value))
                }
                fullWidth
                size="small"
                variant="outlined"
              />
            </Grid>
          </Grid>
        ))}
      </Box>

      <Button
        onClick={handleSaveProfile}
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
      >
        {isEditing ? "Atualizar Perfil" : "Salvar Perfil"}
      </Button>

      <Typography variant="h6" mt={4} mb={2} fontWeight="bold">
        Perfis Salvos
      </Typography>
      {Object.keys(profiles).length === 0 ? (
        <Typography variant="body2" color="textSecondary">
          Nenhum perfil salvo.
        </Typography>
      ) : (
        <Box>
          {Object.keys(profiles).map((name) => (
            <Paper
              key={name}
              elevation={2}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                p: 2,
                mb: 1,
              }}
            >
              <Typography fontWeight="medium">{name}</Typography>
              <Box>
                <Button
                  onClick={() => handleEditProfile({ name, ranges: profiles[name] })}
                  size="small"
                  variant="contained"
                  color="warning"
                  sx={{ mr: 1 }}
                >
                  Editar
                </Button>
                <Button
                  onClick={() => deleteProfile(name)}
                  size="small"
                  variant="contained"
                  color="error"
                >
                  Deletar
                </Button>
              </Box>
            </Paper>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default ProfileManager;