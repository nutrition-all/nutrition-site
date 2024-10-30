import React, { useState } from "react";
import { Food } from "../(types)/TFood";
import { Box, Button, Paper, TextField, MenuItem, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

interface FoodSelectProps {
  foods: Food[];
  onAdd: (food: Food) => void;
}

const FoodSelect: React.FC<FoodSelectProps> = ({ foods, onAdd }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFood, setSelectedFood] = useState<Food | null>(null);

  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (food: Food) => {
    setSelectedFood(food);
    setIsOpen(false);
    setSearchTerm("");
    onAdd(food);
  };

  return (
    <Box position="relative" width="100%" maxWidth="400px">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="outlined"
        fullWidth
        endIcon={<ArrowDropDownIcon />}
        sx={{
          justifyContent: "space-between",
          textTransform: "none",
          color: "text.primary",
          bgcolor: "background.paper",
        }}
      >
        {selectedFood ? selectedFood.name : "Selecione um alimento"}
      </Button>

      {isOpen && (
        <Paper elevation={3} sx={{ position: "absolute", width: "100%", mt: 1, zIndex: 10 }}>
          <Box p={1}>
            <TextField
              placeholder="Buscar alimento..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              variant="outlined"
              fullWidth
              size="small"
            />
          </Box>
          <Box maxHeight="200px" overflow="auto">
            {filteredFoods.length > 0 ? (
              filteredFoods.map((food) => (
                <MenuItem key={food.id} onClick={() => handleSelect(food)}>
                  {food.name}
                </MenuItem>
              ))
            ) : (
              <Typography variant="body2" color="text.secondary" sx={{ p: 2 }}>
                Nenhum alimento encontrado
              </Typography>
            )}
          </Box>
        </Paper>
      )}
    </Box>
  );
};

export default FoodSelect;
