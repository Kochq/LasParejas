import Tanque from './Tanque';
import Component from './Component';
import Buttons from './Buttons';
import './Equipo.css';

const Equipo = (props) => {
  return (
    <div className='card'>
      <h2 className='cardTitle'>{props.name}</h2>
      <div className='contenedorsito'>
        <Tanque />
        <Component />
      </div>
      <Buttons />
    </div>
  );
};

export default Equipo;
