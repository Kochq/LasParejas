import Bomba from './components/Bomba';
import Equipo from './components/Equipo';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <>
      <NavBar />
      <main className='equipos'>
        <section className='tanques'>
          <Equipo name='Equipo 1' />
        </section>
        <section className='bombas'>
          <Bomba />
          <Bomba />
          <Bomba />
        </section>
      </main>
    </>
  );
};

export default App;
