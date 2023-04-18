import { useRef, useState, useEffect } from 'react';
import {
  aguaKeyframe,
  alturaKeyframe,
  presionKeyFrame,
} from '../animations/animations';
import { fetchData } from '../api/api';
import './Tanque.css';

const Tanque = () => {
  const [presionText, setPresionText] = useState(0);
  const [alturaText, setAlturaText] = useState(0);
  const canillaRef = useRef(null);
  const alturaRef = useRef(null);
  const aguaRef = useRef(null);
  let posAntCanilla;
  let posAnt = 100;
  let presion = 0;
  let altura = 0;
  let valor = 0;

  const animarAgua = (finPos, elemento) => {
    const aguaAnimation = new Animation(
      aguaKeyframe(posAnt, finPos, elemento),
      document.timeline
    );
    posAnt = finPos;
    aguaAnimation.play();
  };

  const animarAltura = (finPos, elemento) => {
    const alturaAnimation = new Animation(
      alturaKeyframe(posAnt, finPos, elemento),
      document.timeline
    );
    alturaAnimation.play();
  };

  const animarCanilla = (finPos, elemento) => {
    const canillaAnimation = new Animation(
      presionKeyFrame(finPos, posAntCanilla, elemento),
      document.timeline
    );
    posAntCanilla = finPos;
    canillaAnimation.play();
  };

  const mapear = (x, in_min, in_max, out_min, out_max) =>
    ((x - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;

  const animar = (ref) => {
    altura = ref.altAgua;
    presion = ref.presion;
    setPresionText(presion);
    setAlturaText(altura);

    valor = mapear(altura, 0, 3, 100, 0);

    if (presion >= 0.2) animarCanilla(0, canillaRef);
    else animarCanilla(-100, canillaRef);

    if (valor < 4) animarAltura(4, alturaRef);
    else if (valor > 80) animarAltura(80, alturaRef);
    else animarAltura(valor, alturaRef);
    animarAgua(valor, aguaRef);
  };

  const actualizarDatos = () => fetchData().then(animar);

  useEffect(() => {
    actualizarDatos();
    const intervalId = setInterval(actualizarDatos, 90000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <div className='presion'>
        <img className='presion--img' src='./img/canilla.png' height='40px' />
        <p className='presion--text'>Pres:</p>
        <p
          style={presionText > 0.2 ? { color: '#007DBB' } : { color: 'red' }}
          id='presion--text'
        >
          {presionText}
        </p>
        <p>Bar</p>
      </div>
      <div id='banner'>
        <div className='altura' ref={alturaRef}>
          {`Altura: ${alturaText}m`}
        </div>
        <div id='caudal' ref={canillaRef} className='pour'></div>
        <div id='fill' ref={aguaRef} className='fill'>
          <svg
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            x='0px'
            y='0px'
            width='300px'
            height='220px'
            viewBox='0 0 300 220'
            enableBackground='new 0 0 300 300'
            xmlSpace='preserve'
          >
            <path
              fill='#04ACFF'
              id='waveShape'
              d='M300,300V2.5c0,0-0.6-0.1-1.1-0.1c0,0-25.5-2.3-40.5-2.4c-15,0-40.6,2.4-40.6,2.4
c-12.3,1.1-30.3,1.8-31.9,1.9c-2-0.1-19.7-0.8-32-1.9c0,0-25.8-2.3-40.8-2.4c-15,0-40.8,2.4-40.8,2.4c-12.3,1.1-30.4,1.8-32,1.9
c-2-0.1-20-0.8-32.2-1.9c0,0-3.1-0.3-8.1-0.7V300H300z'
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Tanque;
