import { useEffect, useState } from 'react';
import Data from './Data';
import { fetchData } from '../api/api';
import './Component.css';

const svgs = {
  calendarSvg:
    'M7.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z',
  lamparaSvg:
    'M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18',
  bateriaSvg:
    'M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z',
  relojSvg: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z',
};

const Component = () => {
  const [data, setData] = useState([]);
  const actualizarDatos = () => fetchData().then(setData);

  useEffect(() => {
    actualizarDatos();
    const intervalId = setInterval(actualizarDatos, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className='datos'>
      <Data label='Dia' dato={data.dia} svg={svgs.calendarSvg} />
      <Data label='Hora' dato={data.hora} svg={svgs.relojSvg} />
      <Data label='Bateria' dato={`${data.bateria}v`} svg={svgs.bateriaSvg} />
      <Data label='Energia' dato={data.energia} svg={svgs.lamparaSvg} />
    </div>
  );
};

export default Component;
