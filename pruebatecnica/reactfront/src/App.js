import logo from './logo.svg';
import './App.css';


//importamos los componentes
import CompMostrarFiscalia from './components/MostrarFiscalias';
import CompCrearFiscalia from './components/CrearFiscalia'
import CompEditarFiscalia from './components/EditarFiscalia';
import { BrowserRouter,Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      <img src='./MP_logo.png' className="App-logo" alt="logo" />
      
      </header>

      <BrowserRouter>
      <Routes>
        
        <Route path= '/' element={<CompMostrarFiscalia />} />
        <Route path= '/create' element={<CompCrearFiscalia />} />
        <Route path= '/edit/:id' element={<CompEditarFiscalia />} />
        
        </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
 