import Bomba from './components/Bomba';
import Equipo from './components/Equipo';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <>
      <NavBar />
      <main className='equipos'>
        <div className='tanques'>
          <Equipo name='Equipo 1' />
        </div>
        <div className='bombas'>
          <Bomba />
          <Bomba />
          <Bomba />
        </div>
      </main>
    </>
  );
};

export default App;
