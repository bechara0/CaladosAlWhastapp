import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListaCalados from "./components/ListaCalados";

function App() {
  const [caladas, setCaladas] = useState([]);
  const [calada, setCalada] = useState({});

  return (
    <>
      <Header />
      <div className="md:flex">
        <Formulario caladas={caladas} setCaladas={setCaladas} />
        <ListaCalados
          setCalada={setCalada}
          caladas={caladas}
          setCaladas={setCaladas}
          calada={calada}
        />
      </div>
    </>
  );
}

export default App;
