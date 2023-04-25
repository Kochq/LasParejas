import './Data.css';

const Data = ({ label, dato, svg}) => {
  return (
    <div className='text'>
      <svg
        className='svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth='2'
        stroke='currentColor'
      >
        <path strokeLinecap='round' strokeLinejoin='round' d={svg} />
      </svg>

      <p className='label'>{label}</p>
      <p className='data'>{dato}</p>
    </div>
  );
};

export default Data;
