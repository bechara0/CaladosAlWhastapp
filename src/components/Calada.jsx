import { useState } from "react";
import clipboardCopy from "clipboard-copy";

export const Calada = ({ calada, setCalada }) => {
  const [copiado, setCopiado] = useState(false);
  const {
    ctg,
    fecha,
    especie,
    titular,
    remitente,
    remitente2,
    patente,
    procedencia,
    analisis,
  } = calada;

  const handleClick = () => {
    const mensaje = `
    *AGROCEREALES DON FERNANDO SRL*
    _Nº_ _CTG:_ ${ctg} |  ${especie.toUpperCase()} | ${patente.toUpperCase()}
    ${titular.toUpperCase()} / ${remitente.toUpperCase()} / ${remitente2.toUpperCase()}
    _Procedencia:_ ${procedencia.toUpperCase()} | _Fecha cupo:_ ${fecha}
    _Calado:_ *${analisis.toUpperCase()}*
    `;
    console.log("Mensaje...", mensaje);

    clipboardCopy(mensaje);
    setCopiado(true);

    setTimeout(() => {
      setCopiado(false);
    }, 3000);
  };

  return (
    <div className="md:w-2/5 ">
      <div className="my-5 border-2 leading-8 grid w-full  border-black p-2 rounded-2xl shadow-xl">
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
          Remitente: <span className="font-normal">{remitente}</span>
        </p>
        <p className="font-bold ml-3">
          Remitente 2: <span className="font-normal">{remitente2}</span>
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

        <p className="font-bold ml-3 overflow-hidden">
          Análisis: <span className="font-normal uppercase">{analisis}</span>
        </p>

        <button
          onClick={handleClick}
          className="bg-indigo-400 py-1 w-full rounded-2xl my-4"
        >
          Copiar
        </button>
      </div>
    </div>
  );
};
