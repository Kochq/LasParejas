import Tanque from './Tanque';
import Component from './Component';
import Botones from './Botones';
import './Equipo.css';

const Equipo = ({ name }) => {
  return (
    <div className='equipo'>
      <h2 className='equipo--title'>{name}</h2>
      <div className='equipo--data'>
        <Tanque />
        <Component />
      </div>
      <Botones />
    </div>
  );
};

export default Equipo;
