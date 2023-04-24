import Tanque from './Tanque';
import Component from './Component';
import Botones from './Botones';
import './Equipo.css';

const Equipo = () => {
  return (
    <div className='equipo'>
      <div className='equipo--data'>
        <Tanque />
        <Component />
      </div>
      <Botones />
    </div>
  );
};

export default Equipo;
