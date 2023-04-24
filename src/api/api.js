let parsedDatos;

export const fetchData = (equipo) => {
  return fetch(`https://relevar.com.ar/app/LasParejas/backend.php?${equipo}`)
    .then((res) => res.json())
    .then((datos) => {
      parsedDatos = {
        ...datos,
        'bombas': {
          ...datos.bombas,
        },
        'tanque': {
          ...datos.tanque,
          "bateria": datos.tanque.bateria.toFixed(1),
          "energia": datos.tanque.bateria > 10.8 ? 'OK' : 'Baja',
        }
      }
      return parsedDatos.tanque
    });
};

/*
      parsedData = {
        ...datos[0],
        bateria: datos[0].bateria.toFixed(1),
        energia: datos[0].bateria >= 12 ? 'OK' : 'Baja',
      };
      */
