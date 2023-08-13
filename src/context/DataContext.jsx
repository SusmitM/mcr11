import { movies } from "../data/MovieData";
import { DataReducer } from "../reducers/AppReduder";

const { createContext, useContext, useReducer, useEffect, useState } = require("react");

const DataContext=createContext();

export const DataContextProvider=({children})=>{
    const localStorageData=JSON.parse(localStorage.getItem("movieData"));
    
    const initialData=localStorageData ? localStorageData : {allMovies:[...movies],watchlist:[],starred:[]};
    const [movieData,movieDispatch]=useReducer(DataReducer,initialData);

    const addDataToLocalStorage=()=>{
        localStorage.setItem("movieData",JSON.stringify(movieData))
    }
   
    const getAllGenre=()=>{
        let allGenre= movieData?.allMovies.reduce((genres, movie) => {
            movie.genre.forEach(genre => {
              if (!genres.includes(genre)) {
                genres.push(genre);
              }
            });
            return genres;
          }, ["All Genre"]);
          return allGenre
        }
        
    useEffect(()=>{
        addDataToLocalStorage();
        getAllGenre()
    },[movieData])
    
    const [searchData,setSearchData]=useState("");

    return(
        <DataContext.Provider value={{movieData,movieDispatch,getAllGenre,searchData,setSearchData}}>
            {children}
        </DataContext.Provider>
    )
}


export const useDataContext=()=>useContext(DataContext);