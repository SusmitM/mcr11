import { Box, Typography } from "@mui/material"
import { useDataContext } from "../context/DataContext"
import { MovieCard } from "../components/MovieCard"


export const Watchlist = () => {
  const {movieData}=useDataContext()

  return (
    <div style={{textAlign:"center"}}>
    <Typography variant="h4">Wishlist</Typography>
    <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
      {
       movieData?.watchlist?.length>0 && movieData?.watchlist?.map(data=>{
          return(
            <MovieCard data={data} key={data.id}/>
          )
        })
      }
      {
        movieData?.watchlist?.length===0 && <div>NO MOVIES In Watchlist</div>
      }
    </Box>
    </div>
  )
}
