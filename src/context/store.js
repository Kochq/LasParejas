import { create } from 'zustand';
import { fetchData } from '../api/api';

const useStore = create((set, get) => ({
    // Estado inicial
    currentTab: 'cisternas',

    // Datos
    bombas: {
        eq1: 0,
        eq2: 0,
        eq3: 0,
        dia: '...',
        hora: '...',
        energia: '...',
        location: '',
    },

    tanque: {
        dia: '...',
        hora: '...',
        bateria: '...',
        energia: '...',
        altAgua: 0,
        presion: 0,
        location: '',
    },

    bombasOsmosis: {
        eq1: 0,
        eq2: 0,
        dia: '...',
        hora: '...',
        energia: '...',
        location: '',
    },

    tanqueOsmosis: {
        dia: '...',
        hora: '...',
        bateria: '...',
        energia: '...',
        altAgua: 0,
        presion: 0,
        location: '',
    },

    // Acciones
    setCurrentTab: (tab) => {
        set({ currentTab: tab });
        get().fetchDataForCurrentTab();
    },

    // Actualizar datos
    setData: (data) => {
        set({
            bombas: data.bombas || get().bombas,
            tanque: data.tanque || get().tanque,
            bombasOsmosis: data.bombasOsmosis || get().bombasOsmosis,
            tanqueOsmosis: data.tanqueOsmosis || get().tanqueOsmosis,
        });
    },

    // Función para obtener datos
    fetchDataForCurrentTab: async () => {
        try {
            const data = await fetchData(get().currentTab);
            get().setData(data);
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    },

    // Iniciar intervalo de actualización
    startDataFetchInterval: () => {
        const intervalId = setInterval(() => {
            get().fetchDataForCurrentTab();
        }, 60000);

        return intervalId;
    }
}));

export default useStore;
