import './Data.css';

const Data = ({ label, dato, svg, ifd }) => {
  return (
    <div className='text'>
      <svg
        className='svg'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth='2'
        stroke='currentColor'
      >
        <path strokeLinecap='round' strokeLinejoin='round' d={svg} />
      </svg>

      <p className='label'>{label}:</p>
      <p className='data'>{dato}</p>
    </div>
  );
};

export default Data;
