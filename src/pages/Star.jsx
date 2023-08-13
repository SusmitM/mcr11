import { Box, Typography } from "@mui/material"
import { useDataContext } from "../context/DataContext"
import { MovieCard } from "../components/MovieCard"


export const Star = () => {
  const {movieData}=useDataContext()
  
  return (
    <div style={{textAlign:"center"}}>
    <Typography variant="h4">Starred</Typography>
    <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
      {
       movieData?.starred?.length>0 && movieData?.starred?.map(data=>{
          return(
            <MovieCard data={data} key={data.id}/>
          )
        })
      }
      {
        movieData?.starred?.length===0 && <div>NO MOVIES In Starred</div>
      }
    </Box>
    </div>
  )
}
