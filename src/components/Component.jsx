import Data from './Data';
import { useContext } from 'react';
import './Component.css';
import { apiContext } from '../apiContext';
import { svgs } from '../svgs/svgs';

const Component = () => {
  const {tanque} = useContext(apiContext);

  return (
    <div className='datos'>
      <Data className='dato' label='Dia:' dato={tanque.dia} svg={svgs.calendarSvg} />
      <Data className='dato' label='Hora:' dato={tanque.hora} svg={svgs.relojSvg} />
      <Data className='dato' label='Bateria:' dato={`${tanque.bateria}v`} svg={svgs.bateriaSvg} />
      <Data className='dato' label='Energia:' dato={tanque.energia} svg={svgs.lamparaSvg} />
    </div>
  );
};

export default Component;
