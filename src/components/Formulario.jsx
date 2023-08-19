import { useState } from "react";

const Formulario = () => {
  const [fecha, setFecha] = useState("");
  const [especie, setEspecie] = useState("");
  const [titular, setTitular] = useState("");
  const [remitente, setRemitente] = useState("");
  const [patente, setPatente] = useState("");
  const [procedencia, setProcedencia] = useState("");
  const [analisis, setAnalisis] = useState("");

  const [ërror, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventdefault();

    if (
      [fecha, especie, titular, patente, procedencia, analisis].includes("")
    ) {
      setError(true);
      return;
    }
    setError(false);
  };

  return (
    <>
      <form className="m-5 w-1/2" onSubmit={handleSubmit}>
        {Error && <Error>Controlar Datos Faltantes</Error>}
        <div className="my-3 grid">
          <label className="m-3 mr-5 text-xl font-bold ">Fecha Cupo:</label>
          <input
            className="rounded-xl p-1"
            type="date"
            name="fecha"
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="my-3 grid">
          <label className="m-3 mr-5 text-xl font-bold ">Especie:</label>
          <select
            onChange={(e) => setEspecie(e.target.value)}
            className="rounded-xl p-1"
            name="especie"
          >
            <option value="" selected disabled hidden>
              Elije una especie
            </option>
            <option value="Maíz">Maíz</option>
            <option value="Soja">Soja</option>
            <option value="Trigo">Trigo</option>
            <option value="Sorgo">Sorgo</option>
          </select>
        </div>
        <div className="my-3 grid">
          <label className="m-3 mr-5 text-xl font-bold">Titular CPE:</label>
          <input
            className="rounded-xl p-1"
            type="text"
            placeholder="Ingrese titular CPE"
            onChange={(e) => setTitular(e.target.value)}
          />
        </div>
        <div className="my-3 grid">
          <label className="m-3 mr-5 text-xl font-bold">Remitente:</label>
          <input
            className="rounded-xl p-1"
            type="text"
            placeholder="Ingrese Remitente Com."
            onChange={(e) => setRemitente(e.target.value)}
          />
        </div>
        <div className="my-3 grid">
          <label className="m-3 mr-5 text-xl font-bold">Patente:</label>
          <input
            className="rounded-xl p-1"
            type="text"
            placeholder="Ingrese patente"
            onChange={(e) => setPatente(e.target.value)}
          />
        </div>
        <div className="my-3 grid">
          <label className="m-3 mr-5 text-xl font-bold">Procedencia:</label>
          <input
            className="rounded-xl p-1"
            type="text"
            placeholder="Ingrese procedencia"
            onChange={(e) => setProcedencia(e.target.value)}
          />
        </div>
        <div className="my-3 grid">
          <label className="m-3 mr-5 text-xl font-bold">Análisis:</label>
          <textarea
            className="rounded-xl p-1"
            cols="25"
            rows="5"
            placeholder="Ingrese Calado"
            onChange={(e) => setAnalisis(e.target.value)}
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
    </>
  );
};

export default Formulario;
