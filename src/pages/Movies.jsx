import { Box, MenuItem, Select, Typography } from "@mui/material";
import { useDataContext } from "../context/DataContext"
import { MovieCard } from "../components/MovieCard";
import { useEffect, useState } from "react";
import { AddMovieModal } from "../components/AddMovieModal";


export const Movies = () => {
  const {movieData,movieReducer,getAllGenre,searchData,setSearchData}=useDataContext();
  const genreArray=getAllGenre()
  const yearsArray = ["Release Year", ...Array.from({ length: 2023 - 1990 + 1 }, (_, index) => 1990 + index)];

  const ratingArray=["Rating",...Array.from({length:10-1+1},(_,index)=> 1 + index)];
 
  const localStorageFilters=JSON.parse(localStorage.getItem("filters"));

  const initialFilters=localStorageFilters ? localStorageFilters :{genre:genreArray[0],  year:yearsArray[0],rating:ratingArray[0]};

   const[filters,setFilters]=useState(initialFilters);

  

   useEffect(()=>{
    localStorage.setItem("filters",JSON.stringify(filters));
   },[filters])





  const handleGenreChange = (event) => {
    setFilters(prev=>{return{...prev,genre:event.target.value}});
  };
  const handleYearChange = (event) => {
    setFilters(prev=>{return{...prev,year:event.target.value}});
  };
  const handleRatingChange = (event) => {
    setFilters(prev=>{return{...prev,rating:event.target.value}});
  };
  
  const filteredData=()=>{
    let filteredMovieData=movieData?.allMovies;
    if(filters.genre!=="All Genre"){
      filteredMovieData=filteredMovieData.filter(({genre})=>genre.find(g=>g===filters.genre))

    }
    if(filters.year!=="Release Year"){
      filteredMovieData=filteredMovieData.filter(({year})=>year===filters.year)
    }
    if(filters.rating!=="Rating"){
      filteredMovieData=filteredMovieData.filter(({rating})=>rating===filters.rating)
    }
    if(searchData!==""){
      filteredMovieData=filteredMovieData.filter(({title,cast,director})=>title.toLowerCase().includes(searchData.toLowerCase()) ||
      director.toLowerCase().includes(searchData.toLowerCase()) || cast?.find(d=>d.toLowerCase() ===searchData.toLowerCase()) ) 

    }


    return filteredMovieData;
  }
  






  return (
    <>
    <Box sx={{display:"flex",justifyContent:"space-between"}}>
      <Typography variant="h5">Movies</Typography>
      
      <Select
       value={filters.genre}
       label="Genre"
       onChange={handleGenreChange}
      >
        {genreArray.map(data=>{
          return(
            <MenuItem value={data}>{data}</MenuItem>
          )
        })}
      </Select>
      <Select
       value={filters.year}
       label="Years"
       onChange={handleYearChange}>
        {yearsArray.map(data=>{
          return(
            <MenuItem value={data}>{data}</MenuItem>
          )
        })}
      </Select>
      <Select
       value={filters.rating}
       label="Rating"
       onChange={handleRatingChange}>
        {ratingArray.map(data=>{
          return(
            <MenuItem value={data}>{data}</MenuItem>
          )
        })}
      </Select>
      <AddMovieModal/>
    </Box>
    <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
      {
       filteredData()?.length>0 && filteredData()?.map(data=>{
          return(
            <MovieCard data={data} key={data.id}/>
          )
        })
      }
      {
        filteredData()?.length===0 && <div>NO MOVIES FOUND!!!</div>
      }
    </Box>
    </>
  )
}
