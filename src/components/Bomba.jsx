import { useContext, useState } from 'react';
import {apiContext} from '../apiContext';
import './Bomba.css';
import Boton from './Boton';

const Bomba = ({name}) => {
  const [gif, setGif] = useState(0);

  const {bombas} = useContext(apiContext)

  console.log(bombas)

  const handleClick = () => {
    if (gif === 0) setGif(1);
    else setGif(0);
  };

  return (
    <div className='bomba'>
      <img
        className='bomba--img'
        src={gif ? './img/bomba.png' : './img/bomba.gif'}
        alt='bomba hidraulica'
      />

      <Boton
        href='https://relevar.com.ar/app/geopos.php?centro=-32.6686,-61.51465&punta=-32.6686,-61.51465&nombre=Cisterna de Agua&archivo_movil=Movil001.txt&carpeta=LASPAREJAS'
        svg='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
        svg2='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
        BcColor='#009ae6'
        NewBcColor='#0056b3'
        width={23}
      />

      <button
        className='bomba--btn'
        onClick={handleClick}
        style={gif ? { backgroundColor: 'red' } : { backgroundColor: '#009ae6' }}>
        <svg
          className='svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='3'
          stroke='currentColor'
          //stroke={gif ? 'black' : 'white'}
        >
          <path d='M5.636 5.636a9 9 0 1012.728 0M12 3v9' />
        </svg>
      </button>
    </div>
  );
};

export default Bomba;
