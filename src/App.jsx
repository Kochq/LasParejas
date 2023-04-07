import Equipo from './components/Equipo';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <>
      <NavBar />
      <div className='equipos'>
        <Equipo name='Equipo 1' />
      </div>
    </>
  );
};

export default App;
