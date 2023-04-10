import Boton from './Boton';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className='nav'>
      <div className='nav--title'>
        <img
          className='logo'
          src='https://relevar.com.ar/app/imagenes-iconos/LOGO_RELEVAR.png'
          alt='logo'
        />
        <h1 className='title'>Cooperativa de agua potable de Las Parejas</h1>
      </div>
      <div className='nav--quit'>
        <a className='quit' href='https://relevar.com.ar/app/cerrar-sesion'>
          Cerrar sesión
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
