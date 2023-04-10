import './Boton.css';

const Boton = ({ value, href, svg, svg2, BcColor, NewBcColor, width }) => {
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
      <svg
        className='svg'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='currentColor'
      >
        <path strokeLinecap='round' strokeLinejoin='round' d={svg} />
        <path strokeLinecap='round' strokeLinejoin='round' d={svg2} />
      </svg>
      {value}
    </a>
  );
};

export default Boton;
