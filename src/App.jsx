import { useEffect } from 'react';
import NavBar from './components/NavBar';
import FooterButtons from './components/FooterButtons';
import Bomba from './components/Bomba';
import Equipo from './components/Equipo';
import useStore from './context/store';

const App = () => {
  const currentTab = useStore(state => state.currentTab);
  const setCurrentTab = useStore(state => state.setCurrentTab);
  const fetchDataForCurrentTab = useStore(state => state.fetchDataForCurrentTab);
  const startDataFetchInterval = useStore(state => state.startDataFetchInterval);

  const bombasCisternas = useStore(state => state.bombas);
  const bombasOsmosis = useStore(state => state.bombasOsmosis);

  const handleTabChange = (tabId) => {
    setCurrentTab(tabId);
    console.log('Tab cambiado a:', tabId);
  };

  useEffect(() => {
    fetchDataForCurrentTab();

    const intervalId = startDataFetchInterval();

    return () => clearInterval(intervalId);
  }, [fetchDataForCurrentTab, startDataFetchInterval]);

  const renderContent = () => {
    switch (currentTab) {
      case 'cisternas':
        return (
          <>
            <section className='tanques'>
              <Equipo />
            </section>
            <section className='bombas'>
              <Bomba eq='eq1' nombreEq='Bomba 1' encendido={bombasCisternas.eq1} />
              <Bomba eq='eq2' nombreEq='Bomba 2' encendido={bombasCisternas.eq2} />
              <Bomba eq='eq3' nombreEq='Bomba 3' encendido={bombasCisternas.eq3} />
            </section>
          </>
        );
      case 'osmosis':
        return (
          <>
            <section className='tanques'>
              <Equipo />
            </section>
            <section className='bombas'>
              <Bomba eq='eq1' nombreEq='Bomba 1' encendido={bombasOsmosis.eq1} />
              <Bomba eq='eq2' nombreEq='Bomba 2' encendido={bombasOsmosis.eq2} />
            </section>
          </>
        );
      default:
        return <div>Página no encontrada</div>;
    }
  };

  return (
    <>
      <NavBar />
      <main className='equipos'>
        {renderContent()}
      </main>
      <FooterButtons
        activeTab={currentTab}
        onTabChange={handleTabChange}
      />
    </>
  );
};

export default App;
