let parsedDatos;

export const fetchData = (tab) => {
  return fetch('https://relevar.com.ar/app/LasParejas/backend.php')
    .then((res) => res.json())
    .then((datos) => {
      console.log(datos)
      parsedDatos = {
        ...datos,
        'bombas': {
          ...datos.bombas,
          "bateria": datos.bombas.bateria.toFixed(1),
          "energia": datos.bombas.bateria > 10 ? 'Estable' : 'Baja',
        },
        'tanque': {
          ...datos.tanque,
          "bateria": datos.tanque.bateria.toFixed(1),
          "energia": datos.tanque.bateria > 10.8 ? 'Estable' : 'Baja',
        },
        'bombasOsmosis': {
          ...datos.bombasOsmosis,
          "bateria": datos.bombasOsmosis.bateria.toFixed(1),
          "energia": datos.bombasOsmosis.bateria > 10 ? 'Estable' : 'Baja',
        },
        'tanqueOsmosis': {
          ...datos.tanqueOsmosis,
          "bateria": datos.tanqueOsmosis.bateria.toFixed(1),
          "energia": datos.tanqueOsmosis.bateria > 10.8 ? 'Estable' : 'Baja',
        },
        'tab': tab
      }
      console.log(parsedDatos)
      return parsedDatos
    });
};
