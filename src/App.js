import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';

function App() {
  return (
    <div className="App">
      <div className='freecodecamo-logo-contenedor'>
        <img 
        src={freeCodeCampLogo}
        className='freecodecamo-logo'
        alt='Logo de freeCodeCamp'/>
      </div>
    </div>
  );
}

export default App;
