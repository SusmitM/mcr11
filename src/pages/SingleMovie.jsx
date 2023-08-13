import { useParams } from "react-router-dom";
import { useDataContext } from "../context/DataContext"
import { Box, Button, CardActions, CardContent, Paper, Typography } from "@mui/material";


export const SingleMovie = () => {
  const{movieData,movieDispatch}=useDataContext();
  
  const {movieId}=useParams();

  const selectedMovie=movieData.allMovies.find(({id})=>id.toString()===movieId);
  console.log(selectedMovie);
  console.log(movieId)
  const isMoveWatchlist=movieData.watchlist.find(({id})=>id===selectedMovie.id)?true:false;
  const isMoveStarred=movieData.starred.find(({id})=>id===selectedMovie.id)?true:false;


  const addToWatchlist=()=>{
    movieDispatch({
      type:"Add-Watchlist",
      selectedId:selectedMovie.id
    })
  }
  const addToStarred=()=>{
    movieDispatch({
      type:"Add-Starred",
      selectedId:selectedMovie.id
    })
  }
  const removeFromWatchlist=()=>{
    movieDispatch({
      type:"Remove-Watchlist",
      selectedId:selectedMovie.id
    })
  }
  const removeFromStarred=()=>{
    movieDispatch({
      type:"Remove-Starred",
      selectedId:selectedMovie.id
    })
  }
  return (
    <>
   <Paper sx={{ display: "flex", padding: "2rem",borderRadius:"20px" }} elevation={2}>
  <img style={{ width: "250px", aspectRatio: "1/2" }} src={selectedMovie.imageURL} alt={selectedMovie.name} />
  <Box m={2} sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
    <CardContent sx={{ flex: 1 }}>

      <Typography variant="h4">{selectedMovie.title}</Typography>
      <Typography sx={{fontWeight: 600}} variant="h6" mt={3}>{selectedMovie.summary}</Typography>

      <Typography mt={2} sx={{ fontSize: "1rem", fontWeight: 500 }}>Year: {selectedMovie.year}</Typography>

      <Typography mt={2} sx={{ fontSize: "1rem", fontWeight: 500 }}>Genre: {selectedMovie.genre.map(data => `${data} `)}</Typography >
      <Typography mt={2} sx={{ fontSize: "1rem", fontWeight: 500 }}>Rating: {selectedMovie.rating}</Typography >

      <Typography mt={2} sx={{ fontSize: "1rem", fontWeight: 500 }}>Director: {selectedMovie.director}</Typography >

      <Typography mt={2} sx={{ fontSize: "1rem", fontWeight: 500 }}>Writer: {selectedMovie.writer}</Typography >
      <Typography mt={2} sx={{ fontSize: "1rem", fontWeight: 500 }}>Cast: {selectedMovie.cast.map(data => `${data} `)}</Typography>
    </CardContent>
    <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
      <Button sx={{ backgroundColor: "black", fontWeight: 550 }} variant="contained" size="small"
        onClick={() => isMoveStarred ? removeFromStarred() : addToStarred()}>{isMoveStarred ? "UnStar" : "Star"}</Button>

      <Button sx={{ backgroundColor: "black", fontWeight: 550 }} variant="contained" size="small" onClick={() => isMoveWatchlist ? removeFromWatchlist() : addToWatchlist()} >{isMoveWatchlist ? "Remove From Watchlist" : "Add to WatchList"}</Button>
    </CardActions>
  </Box>
</Paper>
    </>
  )
}
