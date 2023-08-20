import React from "react";
import { Calada } from "./Calada";

const ListaCalados = ({ caladas, setCaladas, setCalada }) => {
  return (
    <>
      <div className="md:w-1/2 m-8 lg:w-3/5 md:h-screen overflow-y-scroll">
        {caladas && caladas.length ? (
          <>
            <h2 className="text-xl font-bold">Listado de Calados</h2>
            <h2 className="text-lg font-bold">
              Click en copiar y pega en Whatsapp
            </h2>
            {caladas.map((calada) => (
              <Calada key={calada.id} calada={calada} setCalada={setCalada} />
            ))}
          </>
        ) : (
          <h1 className="text-xl font-bold">Esperando ingreso de calados</h1>
        )}
      </div>
    </>
  );
};

export default ListaCalados;
