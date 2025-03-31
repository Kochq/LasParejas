import Data from './Data';
import './Component.css';
import { svgs } from '../svgs/svgs';
import useStore from '../context/store';

const Component = () => {
  const currentTab = useStore(state => state.currentTab);
  const tanqueCisternas = useStore(state => state.tanque);
  const tanqueOsmosis = useStore(state => state.tanqueOsmosis);

  const tanque = currentTab === 'cisternas' ? tanqueCisternas : tanqueOsmosis;

  return (
    <div className='datos'>
      <Data className='dato' label='Dia:' dato={tanque.dia} svg={svgs.calendarSvg} />
      <Data className='dato' label='Hora:' dato={tanque.hora} svg={svgs.relojSvg} />
      <Data className='dato' label='Bateria:' dato={`${tanque.bateria}v`} svg={svgs.bateriaSvg} />
      <Data className='dato' label='Energia:' dato={tanque.energia} svg={svgs.rayoSvg} />
    </div>
  );
};

export default Component;
