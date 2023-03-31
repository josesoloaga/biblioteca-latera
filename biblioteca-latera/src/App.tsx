import { useState } from "react";
import "./App.css";
import { AddBook } from "./components/AddBook";

function App() {
  const [titulo, setTitulo] = useState("");
  const [editorial, setEditorial] = useState("");
console.log(titulo);
console.log(editorial);


  const handleSetTitulo = (titulo: string) => {
    setTitulo(titulo);
  };

  const handleSetEditorial = (editorial: string) => {
    setEditorial(editorial);
  };

  return (
    <div className="App">
      <AddBook handleSetTitulo={handleSetTitulo} handleSetEditorial={handleSetEditorial} />
    </div>
  );
}

export default App;