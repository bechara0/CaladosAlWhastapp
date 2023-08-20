export const Calada = ({ calada, setCaladas }) => {
  const {
    ctg,
    fecha,
    especie,
    titular,
    remitente,
    patente,
    procedencia,
    analisis,
  } = calada;
  return (
    <div>
      <p>
        N° CTG: <span>{ctg}</span>
      </p>
      <p>
        Especie: <span>{especie}</span>
      </p>
      <p>
        Titular: <span>{titular}</span>
      </p>
      <p>
        Remitente <span>{remitente}</span>
      </p>
      <p>
        Patente: <span>{patente}</span>
      </p>
      <p>
        Procedencia: <span>{procedencia}</span>
      </p>
      <p>
        Fecha cupo: <span>{fecha}</span>
      </p>
      <p>
        Análisis: <span>{analisis}</span>
      </p>
    </div>
  );
};
