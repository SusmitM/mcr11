
import { Container } from '@mui/material';
import './App.css';
import { Navbar } from './components/Navbar';
import { AppRoutes } from './routes/AppRoutes';

function App() {
  return (
    <div>
      <Navbar/>
     <Container sx={{marginTop:"100px"}}>
     <AppRoutes/>
     </Container>
    </div>
  );
}

export default App;
