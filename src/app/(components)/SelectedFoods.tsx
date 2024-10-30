import React from "react";
import { SelectedFood } from "../(types)/TFood";
import { Paper, Grid, Typography, Slider, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface SelectedFoodsProps {
  selectedFoods: SelectedFood[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

const SelectedFoods: React.FC<SelectedFoodsProps> = ({
  selectedFoods,
  onUpdateQuantity,
  onRemove,
}) => {
  return (
    <Paper sx={{ p: 3 }}>
      {selectedFoods.length > 0 ? (
        selectedFoods.map((food) => (
          <Grid container spacing={2} alignItems="center" key={food.id}>
            <Grid item xs={4}>
              <Typography variant="body1">{food.name}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Slider
                value={food.quantity}
                min={0}
                max={500}
                step={10}
                onChange={(e, value) => onUpdateQuantity(food.id, value as number)}
                valueLabelDisplay="auto"
              />
            </Grid>
            <Grid item xs={2}>
              <IconButton color="error" onClick={() => onRemove(food.id)}>
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        ))
      ) : (
        <Typography textAlign="center" color="textSecondary">
          Nenhum alimento selecionado.
        </Typography>
      )}
    </Paper>
  );
};

export default SelectedFoods;
