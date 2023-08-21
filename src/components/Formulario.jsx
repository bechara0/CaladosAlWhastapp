import { useEffect, useState } from "react";

const Formulario = ({ caladas, setCaladas }) => {
  const [ctg, setCtg] = useState("");
  const [fecha, setFecha] = useState("");
  const [especie, setEspecie] = useState("");
  const [titular, setTitular] = useState("");
  const [remitente, setRemitente] = useState("");
  const [remitente2, setRemitente2] = useState("");
  const [patente, setPatente] = useState("");
  const [procedencia, setProcedencia] = useState("");
  const [analisis, setAnalisis] = useState("");

  const [error, setError] = useState(false);
  const [validarCtg, setValidarCtg] = useState(false);

  useEffect(() => {
    console.log("calada actualizada: ", caladas);
  }, [caladas]);

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      [ctg, fecha, especie, titular, patente, procedencia, analisis].includes(
        ""
      )
    ) {
      setError(true);
      console.log("Campos obligatorios vacios", error);
      return;
    }
    setError(false);

    if (ctg.length !== 11) {
      setValidarCtg(true);
      return;
    }
    setValidarCtg(false);

    const objetoCalado = {
      ctg,
      fecha,
      especie,
      titular,
      remitente,
      remitente2,
      patente,
      procedencia,
      analisis,
      id: generarId(),
    };

    setCaladas([...caladas, objetoCalado]);

    setFecha("");
    setCtg("");
    setEspecie("");
    setTitular("");
    setRemitente("");
    setRemitente2("");
    setPatente("");
    setAnalisis("");
    setProcedencia("");
  };

  return (
    <div className="m-5 md:w-1/2 lg:w-2/6">
      <form onSubmit={handleSubmit}>
        {error && (
          <p className="bg-red-700 w-full text-center text-white font-bold uppercase">
            completar campos obligatorios
          </p>
        )}
        {validarCtg && (
          <p className="bg-red-700 w-full text-center text-white font-bold uppercase">
            Ingrese correctamente CTG
          </p>
        )}

        <div className="my-3 grid">
          <label className="m-3 mr-5 text-xl font-bold">N° CTG:</label>
          <input
            className="rounded-xl p-1"
            type="text"
            placeholder="Ingrese N° CTG"
            onChange={(e) => setCtg(e.target.value)}
            value={ctg}
          />
        </div>
        <div className="my-3 grid">
          <label className="m-3 mr-5 text-xl font-bold ">Fecha Cupo:</label>
          <input
            className="rounded-xl p-1"
            type="text"
            name="fecha"
            onChange={(e) => setFecha(e.target.value)}
            value={fecha}
            placeholder="Ingrese la fecha"
          />
        </div>
        <div className="my-3 grid">
          <label className="m-3 mr-5 text-xl font-bold ">Especie:</label>
          <select
            onChange={(e) => setEspecie(e.target.value)}
            className="rounded-xl p-1"
            name="especie"
            value={especie}
          >
            <option value="">Elije una especie</option>
            <option value="Maíz">Maíz</option>
            <option value="Soja">Soja</option>
            <option value="Trigo">Trigo</option>
            <option value="Sorgo">Sorgo</option>
          </select>
        </div>
        <div className="my-3 grid">
          <label className="m-3 mr-5 text-xl font-bold uppercase">
            Titular CPE:
          </label>
          <input
            className="rounded-xl p-1"
            type="text"
            placeholder="Ingrese titular CPE"
            onChange={(e) => setTitular(e.target.value)}
            value={titular}
          />
        </div>
        <div className="my-3 grid">
          <label className="m-3 mr-5 text-xl font-bold uppercase">
            Remitente:
          </label>
          <input
            className="rounded-xl p-1"
            type="text"
            placeholder="Ingrese Remitente Com."
            onChange={(e) => setRemitente(e.target.value)}
            value={remitente}
          />
        </div>
        <div className="my-3 grid">
          <label className="m-3 mr-5 text-xl font-bold uppercase">
            Remitente 2:
          </label>
          <input
            className="rounded-xl p-1"
            type="text"
            placeholder="Ingrese Remitente Com."
            onChange={(e) => setRemitente2(e.target.value)}
            value={remitente2}
          />
        </div>
        <div className="my-3 grid">
          <label className="m-3 mr-5 text-xl font-bold uppercase">
            Patente:
          </label>
          <input
            className="rounded-xl p-1"
            type="text"
            placeholder="Ingrese patente"
            onChange={(e) => setPatente(e.target.value)}
            value={patente}
          />
        </div>
        <div className="my-3 grid">
          <label className="m-3 mr-5 text-xl font-bold uppercase">
            Procedencia:
          </label>
          <input
            className="rounded-xl p-1"
            type="text"
            placeholder="Ingrese procedencia"
            onChange={(e) => setProcedencia(e.target.value)}
            value={procedencia}
          />
        </div>
        <div className="my-3 grid">
          <label className="m-3 mr-5 text-xl font-bold uppercase">
            Análisis:
          </label>
          <textarea
            className="rounded-xl p-1 uppercase"
            cols="25"
            rows="5"
            placeholder="Ingrese Calado"
            onChange={(e) => setAnalisis(e.target.value)}
            value={analisis}
          ></textarea>
        </div>
        <div>
          <input
            type="submit"
            value="Aceptar"
            className="w-full my-5 text-xl cursor-pointer text-white font-bold rounded-xl py-3 bg-slate-900 hover:bg-slate-800 transition-all"
          />
        </div>
      </form>
    </div>
  );
};

export default Formulario;
