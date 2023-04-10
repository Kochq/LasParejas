import Tanque from './Tanque';
import Component from './Component';
import Botones from './Botones';
import './Equipo.css';

const Equipo = ({ name }) => {
  return (
    <div className='card'>
      <h2 className='cardTitle'>{name}</h2>
      <div className='contenedorsito'>
        <Tanque />
        <Component />
      </div>
      <Botones />
    </div>
  );
};

export default Equipo;
