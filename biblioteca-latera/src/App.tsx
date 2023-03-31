
import { useEffect, useState } from 'react';
import './App.css';
import { AddBook } from './components/AddBook';
import { ListBook } from './components/ListBook';

function App() {

  const [title, setTitle]= useState("")
  const [editorial, setEditorial] = useState("")

  return (
    <div className="App">
<AddBook setTitle= {setTitle} setEditorial={setEditorial}/>
<ListBook title= {title} editorial= {editorial}/>
    </div>
  );
}

export default App;
