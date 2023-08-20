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
      <Formulario caladas={caladas} setCaladas={setCaladas} />
      <ListaCalados
        setCalada={setCalada}
        caladas={caladas}
        setCaladas={setCaladas}
      />
    </>
  );
}

export default App;
