import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Boton from "./componente/Boton";


function App() {
  return (
    <div className="App">
      <div className='freecodecamo-logo-contenedor'>
        <img 
        src={freeCodeCampLogo}
        className='freecodecamo-logo'
        alt='Logo de freeCodeCamp'/>
      </div>
      <div className='contenedor-calculadora'>
        <div className='fila'>
          <Boton>1</Boton>
          </div>

        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
      
      </div>
    </div>
  );
}

export default App;
