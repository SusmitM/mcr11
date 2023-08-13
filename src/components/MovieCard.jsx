import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

export const MovieCard = ({data}) => {
  return (
   <>
   <Card sx={{margin:5,width:"300px",minHeight:"350px",display: 'flex', flexDirection: 'column'}}>
   <CardMedia
        component="img"
        width="300px"
        image={data.imageURL}
        alt={data.name}
        sx={{aspectRatio: 1}}
      />
      <CardContent sx={{ flex: 1 }}>
    <Typography sx={{fontSize:"1.5rem",fontWeight:600,textAlign:"center"}}>{data.title}</Typography>
    <Typography sx={{fontSize:"0.9rem",fontWeight:500}}>{data.summary}</Typography>
   </CardContent>
   <CardActions sx={{display:"flex",justifyContent:"space-between"}}>
        <Button sx={{backgroundColor:"black",fontWeight:550}} variant="contained" size="small">{data.starred ? "UnStar": "Star"}</Button>
        <Button sx={{backgroundColor:"black",fontWeight:550}} variant="contained" size="small">Add to Wishlist</Button>
      </CardActions>
   </Card>
   
   </>
  )
}
