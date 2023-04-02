import { useState } from "react";
import Login from "src/ui/login/login-component";
import { AddBook } from "../ui/add-book/add-book-componets";

function Home() {
  const [titulo, setTitulo] = useState("");
  const [editorial, setEditorial] = useState("");
  const [books, setBooks] = useState([]);
  const [steps, setSteps] = useState<number>(0);

  console.log(titulo);
  console.log(editorial);

  /*   const handleSetBooks = ()=>{
    setBooks()
  } */

  const handleSetTitulo = (titulo: string) => {
    setTitulo(titulo);
  };

  const handleSetEditorial = (data: string) => {
    setEditorial(data);
  };

  const handleSteps = (step: number) => {
    setSteps(step)
  }

  return (
    <div className="Home">
      {steps === 0 && <Login handleSteps={handleSteps} />}
      {steps === 1 && <AddBook handleSetTitulo={handleSetTitulo} handleSetEditorial={handleSetEditorial} />}
    </div>
  );
}

export default Home;
