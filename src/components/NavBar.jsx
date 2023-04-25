import './NavBar.css';

const NavBar = () => {
  return (
    <nav className='nav'>
      <div className='nav--title'>
        <a href='https://relevar.com.ar/app/cerrar-sesion'>
          <img
            className='logo'
            src='https://relevar.com.ar/app/imagenes-iconos/LOGO_RELEVAR.png'
            alt='logo'
          />
        </a>
        <h1 className='title'>Las Parejas</h1>
      </div>
      <div className='nav--quit'>
        <a className='quit' href='https://relevar.com.ar/app/cerrar-sesion'>
          Salir
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
