import Boton from './Boton';
import './Botones.css';

const Buttons = () => {
  return (
    <div className='botones'>
      <Boton
        value='Ubicacion'
        href='https://relevar.com.ar/app/geopos.php?centro=-32.6686,-61.51465&punta=-32.6686,-61.51465&nombre=Cisterna de Agua&archivo_movil=Movil001.txt&carpeta=LASPAREJAS'
        svg='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
        svg2='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
        BcColor='#009ae6'
        NewBcColor='#0056b3'
      />
      <Boton
        value='Max/Min'
        href='https://relevar.com.ar/app/LasParejas_MaxMin.php'
        svg='M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z'
        BcColor='#009ae6'
        NewBcColor='#0056b3'
      />
    </div>
  );
};

export default Buttons;
