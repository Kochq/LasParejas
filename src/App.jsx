import Equipo from './components/Equipo';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <>
      <NavBar />
      <main className='equipos'>
        <Equipo name='Equipo 1' />
      </main>
    </>
  );
};

export default App;
