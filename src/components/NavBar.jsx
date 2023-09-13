import './NavBar.css';

const NavBar = () => {
  return (
    <nav className='nav'>
      <div className='nav--title'>
        <a href='http://relevar.com.ar:8080/app/cerrar-sesion'>
          <img
            className='logo'
            src='http://relevar.com.ar:8080/app/imagenes-iconos/LOGO_RELEVAR.png'
            alt='logo'
          />
        </a>
        <h1 className='title'>Las Parejas</h1>
      </div>
      <div className='nav--quit'>
        <a className='quit' href='http://relevar.com.ar:8080/app/cerrar-sesion'>
          Salir
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
