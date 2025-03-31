let parsedDatos;

export const fetchData = (equipo) => {
  return fetch(`http://relevar.com.ar/app/LasParejas/backend.php?${equipo}`)
    .then((res) => res.json())
    .then((datos) => {
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
        }
      }
      console.log(parsedDatos)
      return parsedDatos
    });
};
