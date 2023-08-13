import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { TextField } from "@mui/material";

import { v4 as uuidv4 } from "uuid";
import { useDataContext } from "../context/DataContext";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const AddMovieModal = () => {
  const { movieDispatch } = useDataContext();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const [newMovie, setNewMovie] = useState({
    id: uuidv4(),
    title: "",
    year: 0,
    genre: [],
    rating: 0,
    director: "",
    writer: "",
    cast: [],
    summary: "",
    imageUrl: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();

    movieDispatch({
      type: "Add-Movie",
      data: newMovie,
    });
    handleClose();
    setNewMovie({
      id: uuidv4(),
      title: "",
      year: 0,
      genre: [],
      rating: 0,
      director: "",
      writer: "",
      cast: [],
      summary: "",
      imageUrl: "",
    });
  };
  return (
    <div>
      <Button
        variant="contained"
        sx={{ backgroundColor: "black", color: "white" }}
        onClick={handleOpen}
      >
        Add Movie
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography>Add Movie</Typography>
          <Box
            component="form"
            onSubmit={(event) => handleSubmit(event)}
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
              padding: "2rem",
            }}
          >
            <TextField
              label="Name"
              onChange={(e) =>
                setNewMovie((prev) => {
                  return { ...prev, title: e.target.value };
                })
              }
              size="small"
              halfWidth
              required
              variant="outlined"
              color="secondary"
              type="text"
              sx={{ mb: 3 }}
              value={newMovie.title}
            />
            <TextField
              label="Year"
              onChange={(e) =>
                setNewMovie((prev) => {
                  return { ...prev, year: e.target.value };
                })
              }
              size="small"
              halfWidth
              required
              variant="outlined"
              color="secondary"
              type="number"
              sx={{ mb: 3 }}
              value={newMovie.year}
            />
            <TextField
              label="Genre"
              onChange={(e) =>
                setNewMovie((prev) => {
                  return { ...prev, genre: [e.target.value] };
                })
              }
              size="small"
              halfWidth
              required
              variant="outlined"
              color="secondary"
              type="text"
              sx={{ mb: 3 }}
              value={newMovie.genre}
            />

            <TextField
              label="Rating"
              onChange={(e) =>
                setNewMovie((prev) => {
                  return { ...prev, rating: e.target.value };
                })
              }
              size="small"
              halfWidth
              required
              variant="outlined"
              color="secondary"
              type="number"
              sx={{ mb: 3 }}
              value={newMovie.rating}
            />
            <TextField
              label="Director"
              onChange={(e) =>
                setNewMovie((prev) => {
                  return { ...prev, director: e.target.value };
                })
              }
              size="small"
              halfWidth
              required
              variant="outlined"
              color="secondary"
              type="text"
              sx={{ mb: 3 }}
              value={newMovie.director}
            />
            <TextField
              label="Writer"
              onChange={(e) =>
                setNewMovie((prev) => {
                  return { ...prev, writer: e.target.value };
                })
              }
              size="small"
              halfWidth
              required
              variant="outlined"
              color="secondary"
              type="text"
              sx={{ mb: 3 }}
              value={newMovie.writer}
            />
            <TextField
              label="Cast"
              onChange={(e) =>
                setNewMovie((prev) => {
                  return {
                    ...prev,
                    cast: [e.target.value],
                  };
                })
              }
              size="small"
              halfWidth
              required
              variant="outlined"
              color="secondary"
              type="text"
              sx={{ mb: 3 }}
              value={newMovie.cast}
            />
            <TextField
              label="Summary"
              onChange={(e) =>
                setNewMovie((prev) => {
                  return { ...prev, summary: e.target.value };
                })
              }
              size="small"
              halfWidth
              required
              variant="outlined"
              color="secondary"
              type="text"
              sx={{ mb: 3 }}
              value={newMovie.summary}
            />
            <TextField
              label="ImageURl"
              onChange={(e) =>
                setNewMovie((prev) => {
                  return { ...prev, imageUrl: e.target.value };
                })
              }
              size="small"
              halfWidth
              required
              variant="outlined"
              color="secondary"
              type="text"
              sx={{ mb: 3 }}
              value={newMovie.imageUrl}
            />
            <Button variant="contained" type="submit">
              Add Movie
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
