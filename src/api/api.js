let parsedData;

export const fetchData = (equipo) => {
  return fetch(`https://relevar.com.ar/app/LasParejas/backend.php?${equipo}`)
    .then((res) => res.json())
    .then((datos) => {
      parsedData = {
        ...datos,
        bateria: datos.bateria.toFixed(1),
        energia: datos.bateria >= 12 ? 'OK' : 'Baja',
      };
      return parsedData;
    });
};

//vercel
