import HomePage from './pages/home-page/Home-page'
import './App.scss';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <HomePage />
      </div>
    </ChakraProvider>
  );
}

export default App;
