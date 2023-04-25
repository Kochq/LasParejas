import Bomba from './components/Bomba';
import Equipo from './components/Equipo';
import NavBar from './components/NavBar';
import { apiContext } from './apiContext';
import {useState, useEffect} from 'react';
import { fetchData } from './api/api';


const App = () => {
  const [data, setData] = useState({
    'bombas' : {
      'dia': '...',
      'hora': '...',
      'energia': '...'
    },
    'tanque': {
      'dia': '...',
      'hora': '...',
      'bateria': '...',
      'energia': '...'
    }
  })

  const actualizarDatos = () => fetchData().then(setData);

  useEffect(() => {
    actualizarDatos();
    const intervalId = setInterval(actualizarDatos, 3000);

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
            <Equipo />
          </section>
          <section className='bombas'>
            <Bomba eq='eq1' nombreEq='Bomba 1' encendido={data.bombas.eq1} />
            <Bomba eq='eq2' nombreEq='Bomba 2' encendido={data.bombas.eq2} />
            <Bomba eq='eq3' nombreEq='Bomba 3' encendido={data.bombas.eq3} />
          </section>
        </main>
      </apiContext.Provider>

    </>
  );
};

export default App;
