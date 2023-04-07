import Tanque from './Tanque';
import { getData } from '../api/fetchData';
import { useEffect, useState } from 'react';
import './Component.css';

const Component = () => {
  const [data, setData] = useState([]);

  const actualizarDatos = async () => {
    const datosJson = await getData();
    setData(datosJson);
  };

  useEffect(() => {
    actualizarDatos();
    const intervalId = setInterval(actualizarDatos, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className='datos'>
      <div className='text'>
        <p className='label'>Dia:</p>
        <p className='data'>{data.dia}</p>
      </div>
      <div className='text'>
        <p className='label'>Hora: </p>
        <p className='data'>{data.hora}</p>
      </div>
      <div className='text'>
        <p className='label'>Energia: </p>
        <p className='data'>{data.bateria >= 12 ? 'OK' : 'Baja'}</p>
      </div>
      <div className='text'>
        <p className='label'>Bateria: </p>
        <p className='data'>
          {data.bateria ? data.bateria.toFixed(1) : data.bateria} v
        </p>
      </div>
    </div>
  );
};

export default Component;
