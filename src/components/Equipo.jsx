import Tanque from './Tanque';
import Component from './Component';
import './Equipo.css'

const Equipo = (props) => {
  return (
    <div className='card'>
      <h2 className='cardTitle'>{props.name}</h2>
      <div className='contenedorsito'>
        <Tanque />
        <Component />
      </div>
    </div>
  );
};

export default Equipo;
