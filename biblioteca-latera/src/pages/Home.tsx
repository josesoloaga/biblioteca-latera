import { useState } from "react";
import Login from "src/ui/features/login/login-component";
import { AddBook } from "../ui/features/add-book/add-book-componets";

function Home() {
  const [titulo, setTitulo] = useState("");
  const [editorial, setEditorial] = useState("");
  const [books, setBooks] = useState([]);

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

 

  return (
    <div className="Home">
    <AddBook handleSetTitulo={handleSetTitulo} handleSetEditorial={handleSetEditorial} />
    </div>
  );
}

export default Home;
