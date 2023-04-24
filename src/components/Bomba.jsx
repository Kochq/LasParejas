import { useState } from 'react';
import './Bomba.css';
import Boton from './Boton';

const Bomba = ({eq, encendido}) => {
  const [loading, setLoading] = useState(0);

  const handleClick = (eq) => {
    setLoading(1);
    console.log(eq)

    fetch('https://relevar.com.ar/app/lasparejas/backend.php', {
      method: 'POST',
      body: JSON.stringify({
        'eq': eq,
      }),
      headers: {
        'Content-Type':'application/json'
      }
    })
      .then(res => {
        if (res.status === 200) alert('Acción tomada');
        else if (res.status === 404) throw new Error('Error: 404 Not Found');
        else if (res.status === 500) throw new Error('Error: 500 Internal Server Error');
        else if (res.status === 502) {
          alert('Error: Ya hay un dato enviandose');
          throw new Error('Error: Ya hay un dato enviandose');
        }
        else throw new Error('Error: ' + res.status);
        setLoading(0);
      })
      .catch(error => {
        console.error(error);
        setLoading(0);
      });
  };

  return (
    <div className='bomba' >
      <h3 className='bomba--title'>Bomba 1</h3>
      <div className='bomba--body'>
        <img
          className='bomba--img'
          src={encendido == 0 ? './img/bomba.png' : './img/bomba.gif'}
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

        <button className='bomba--btn' onClick={()=> handleClick(eq)}>
          {loading 
            ? <img className='bomba--gif' src="./img/loading.gif" alt=""/>
            : <svg
              className='svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='3'
              stroke='currentColor'
            >
              <path d='M5.636 5.636a9 9 0 1012.728 0M12 3v9' />
            </svg>
          }
        </button>
      </div>
    </div>
  );
};

export default Bomba;
