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
    <div className="md:w-2/5">
      <div className="my-5 border-2 leading-8  w-full  border-black p-2 rounded-2xl shadow-xl">
        <p className="font-bold ml-3 mt-3">
          N° CTG: <span className="font-normal">{ctg}</span>
        </p>
        <p className="font-bold ml-3">
          Especie: <span className="font-normal">{especie}</span>
        </p>
        <p className="font-bold ml-3">
          Titular: <span className="font-normal">{titular}</span>
        </p>
        <p className="font-bold ml-3">
          Remitente <span className="font-normal">{remitente}</span>
        </p>
        <p className="font-bold ml-3">
          Patente: <span className="font-normal">{patente}</span>
        </p>
        <p className="font-bold ml-3">
          Procedencia: <span className="font-normal">{procedencia}</span>
        </p>
        <p className="font-bold ml-3">
          Fecha cupo: <span className="font-normal">{fecha}</span>
        </p>
        <p className="font-bold ml-3">
          Análisis: <span className="font-normal">{analisis}</span>
        </p>
        <button className="bg-indigo-400 py-1 w-full rounded-2xl my-4">
          Copiar
        </button>
      </div>
    </div>
  );
};
