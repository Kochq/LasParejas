let accion;
import './Bomba.css';
import Boton from './Boton';
import Data from './Data.jsx'
import { useContext } from 'react';
import { svgs } from '../svgs/svgs.js';
import { apiContext } from '../apiContext';


const Bomba = ({eq, encendido, nombreEq}) => {
  const {bombas} = useContext(apiContext);

  if (encendido == 1) accion = 'Apagar'
  else accion = 'Encender'

  return (
    <div className='bomba' >
      <h3 className='bomba--title'>{nombreEq}</h3>
      <div className='bomba--body'>

        <div className="bomba--bomba">
          <img
            className='bomba--img'
            src={encendido == 0 ? './img/bomba.png' : './img/bomba.gif'}
            alt='bomba hidraulica'
          />
        </div>

        <div className="bomba--datos">
          <Data dato={bombas.dia} svg={svgs.calendarSvg} />
          <Data dato={bombas.hora} svg={svgs.relojSvg} />
          <Data dato={bombas.energia} svg={svgs.rayoSvg} />
        </div>

        <div className="bomba--botones">
          <Boton
            href={bombas.location}
            svg='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
            svg2='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
            BcColor='#009ae6'
            NewBcColor='#0056b3'
            width={23}
          />

          <Boton 
            href={`http://relevar.com.ar:8080/app/lasparejas/controlLasParejas.php?nombre=${nombreEq}&accion=${accion}&eq=${eq}`}
            BcColor='#009ae6'
            NewBcColor='#0056b3'
            width={23}
            svg='M5.636 5.636a9 9 0 1012.728 0M12 3v9'
          />
        </div>

      </div>
    </div>
  );
};

export default Bomba;
