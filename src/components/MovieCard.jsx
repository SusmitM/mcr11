import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { useDataContext } from '../context/DataContext'
import { useNavigate } from 'react-router-dom';

export const MovieCard = ({data}) => {
  const {movieDispatch,movieData}=useDataContext();
  const navigate=useNavigate();



  const isMoveWatchlist=movieData.watchlist.find(({id})=>id===data.id)?true:false;
  const isMoveStarred=movieData.starred.find(({id})=>id===data.id)?true:false;

  const addToWatchlist=()=>{
    movieDispatch({
      type:"Add-Watchlist",
      selectedId:data.id
    })
  }
  const addToStarred=()=>{
    movieDispatch({
      type:"Add-Starred",
      selectedId:data.id
    })
  }
  const removeFromWatchlist=()=>{
    movieDispatch({
      type:"Remove-Watchlist",
      selectedId:data.id
    })
  }
  const removeFromStarred=()=>{
    movieDispatch({
      type:"Remove-Starred",
      selectedId:data.id
    })
  }
  return (
   <>
   <Card sx={{margin:2,width:"325px",minHeight:"350px",display: 'flex', flexDirection: 'column'}}
    >
   <CardMedia
        component="img"
        width="300px"
        image={data.imageURL}
        alt={data.name}
        sx={{aspectRatio: 1}}
        onClick={()=>navigate(`/singlemovie/${data.id}`)}
      />
      <CardContent sx={{ flex: 1 }} onClick={()=>navigate(`/singlemovie/${data.id}`)}>
    <Typography sx={{fontSize:"1.5rem",fontWeight:600,textAlign:"center"}}>{data.title}</Typography>
    <Typography sx={{fontSize:"0.9rem",fontWeight:500}}>{data.summary}</Typography>
   </CardContent>
   <CardActions sx={{display:"flex",justifyContent:"space-between"}}>
        <Button sx={{backgroundColor:"black",fontWeight:550}} variant="contained" size="small"
        onClick={()=>isMoveStarred?removeFromStarred():addToStarred()}>{isMoveStarred ? "UnStar": "Star"}</Button>

        <Button sx={{backgroundColor:"black",fontWeight:550}} variant="contained" size="small" onClick={()=>isMoveWatchlist?removeFromWatchlist():addToWatchlist()} >{isMoveWatchlist?"Remove From Watchlist" :"Add to WatchList"}</Button>
      </CardActions>
   </Card>
   
   </>
  )
}
