import { useEffect, useState } from "react";

const Formulario = ({ caladas, setCaladas }) => {
  const [ctg, setCtg] = useState("");
  const [fecha, setFecha] = useState("");
  const [especie, setEspecie] = useState("");
  const [titular, setTitular] = useState("");
  const [remitente, setRemitente] = useState("");
  const [patente, setPatente] = useState("");
  const [procedencia, setProcedencia] = useState("");
  const [analisis, setAnalisis] = useState("");

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

    const objetoCalado = {
      ctg,
      fecha,
      especie,
      titular,
      remitente,
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
    setPatente("");
    setAnalisis("");
    setProcedencia("");
  };

  return (
    <div className="m-5 md:w-1/2 lg:w-2/6">
      <form onSubmit={handleSubmit}>
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
          <label className="m-3 mr-5 text-xl font-bold">Titular CPE:</label>
          <input
            className="rounded-xl p-1"
            type="text"
            placeholder="Ingrese titular CPE"
            onChange={(e) => setTitular(e.target.value)}
            value={titular}
          />
        </div>
        <div className="my-3 grid">
          <label className="m-3 mr-5 text-xl font-bold">Remitente:</label>
          <input
            className="rounded-xl p-1"
            type="text"
            placeholder="Ingrese Remitente Com."
            onChange={(e) => setRemitente(e.target.value)}
            value={remitente}
          />
        </div>
        <div className="my-3 grid">
          <label className="m-3 mr-5 text-xl font-bold">Patente:</label>
          <input
            className="rounded-xl p-1"
            type="text"
            placeholder="Ingrese patente"
            onChange={(e) => setPatente(e.target.value)}
            value={patente}
          />
        </div>
        <div className="my-3 grid">
          <label className="m-3 mr-5 text-xl font-bold">Procedencia:</label>
          <input
            className="rounded-xl p-1"
            type="text"
            placeholder="Ingrese procedencia"
            onChange={(e) => setProcedencia(e.target.value)}
            value={procedencia}
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
