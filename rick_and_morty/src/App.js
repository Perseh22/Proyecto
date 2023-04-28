import "./App.css";
import Form from "./components/Form";
import Detail from "./components/Detal";
import About from "./components/About";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import { useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

const API_KEY ="590bce780340.832675ec038229097bfe"
const URL_BASE = "https://be-a-rym.up.railway.app/api/character";

function App() {
  //funciones
  const location = useLocation()
  const [characters, setCharacters] = useState([]);
  const onClose = (id) => {
    const filtercharacter = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(filtercharacter);
  };
  function onSearch(id) {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    });
  }

  //funciones2
  return (
    <div className="App">
      {location.pathname !== "/" && <Nav onSearch={onSearch} />  }
     
      <Routes>
        <Route path="/" element={<Form/>}/>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
