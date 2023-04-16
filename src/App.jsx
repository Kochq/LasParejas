import Bomba from './components/Bomba';
import Equipo from './components/Equipo';
import NavBar from './components/NavBar';
import { apiContext } from './apiContext';
import {useState, useEffect} from 'react';
import { fetchData } from './api/api';


const App = () => {
  const [data, setData] = useState({})
  const actualizarDatos = () => fetchData().then(setData);

  useEffect(() => {
    actualizarDatos();
    const intervalId = setInterval(actualizarDatos, 90000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);


  return (
    <>
      <NavBar />

      <apiContext.Provider value={data} >
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
      </apiContext.Provider>

    </>
  );
};

export default App;
