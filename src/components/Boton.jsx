import './Boton.css';

const Boton = ({ value, href, svg, svg2, BcColor, NewBcColor, width, img }) => {
  return (
    <a
      className='boton'
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = NewBcColor;
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = BcColor;
      }}
      style={{ backgroundColor: BcColor, width:width}}
      href={href}
    >
      {
        img 
          ? <img className='bomba--gif' src={img} />
          : <svg
            className='svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='2.3'
            stroke='currentColor'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d={svg} />
            <path strokeLinecap='round' strokeLinejoin='round' d={svg2} />
          </svg>
      }
      {value}
    </a>
  );
};

export default Boton;
