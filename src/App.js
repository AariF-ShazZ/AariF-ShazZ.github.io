
import { Box } from '@chakra-ui/react';
import './App.css';
import HolePage from './Pages/HolePage';
import Navbar from './Pages/Navbar';

function App() {
  return (
    <Box w="100%">
      <Navbar />
     <HolePage />
    </Box>
  );
}

export default App;
