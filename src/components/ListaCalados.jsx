import React from "react";
import { Calada } from "./Calada";

const ListaCalados = ({ caladas, setCaladas, setCalada }) => {
  return (
    <>
      <div className="md:w-1/2 m-8 flex flex-col lg:w-4/6 md:h-screen overflow-y-scroll">
        {caladas && caladas.length ? (
          <>
            <h2 className="text-xl text-center font-bold">
              Listado de Calados
            </h2>
            <h2 className="text-lg font-bold text-center">
              Click en copiar y pega en Whatsapp
            </h2>
            <div className="flex flex-wrap justify-evenly h-100 gap-x-10">
              {caladas.map((calada) => (
                <Calada key={calada.id} calada={calada} setCalada={setCalada} />
              ))}
            </div>
          </>
        ) : (
          <h1 className="text-xl font-bold text-center">
            Esperando ingreso de calados
          </h1>
        )}
      </div>
    </>
  );
};

export default ListaCalados;
