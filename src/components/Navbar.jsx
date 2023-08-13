import { Search } from "@mui/icons-material"
import { AppBar, Box, TextField, Toolbar, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useDataContext } from "../context/DataContext";


export const Navbar = () => {
    const navigate=useNavigate();
    const {searchData,setSearchData}=useDataContext();
  return (
   <>
  <Box sx={{marginBottom:"25px"}}>
  <AppBar sx={{backgroundColor:"black"}}>
        <Toolbar>
            <Typography variant="h6"
            noWrap
            component="div">
                IMDM
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <TextField onChange={(e)=>setSearchData(e.target.value)} sx={{backgroundColor:"white",width:"25rem"}}   label="Search movies with title,cast and director..." variant="outlined"  size="small" />
            <Box sx={{ flexGrow: 1 }} />
            
            <Box sx={{display:"flex"}}>
                <Typography onClick={()=>navigate("/")} sx={{fontSize:"1rem",fontWeight:500,cursor:"pointer"}}>Movies</Typography>
                <Typography onClick={()=>navigate("/watchlist")} sx={{fontSize:"1rem",fontWeight:500,cursor:"pointer",ml:3}}>Watch List</Typography>
                <Typography onClick={()=>navigate("/star")} sx={{fontSize:"1rem",fontWeight:500,cursor:"pointer",ml:3}}>Starred Movies</Typography>
            </Box>
           
          
        </Toolbar>

    </AppBar>
  </Box>

   </>
  )
}
