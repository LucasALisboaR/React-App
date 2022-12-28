import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles.css';


function App() {

  const [input, setInput] = useState('');

  function handleSearch(){
    alert("Valor do Input " + input)
  }

  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>
      <div className="containerInput">
        <input type="text" placeholder="Digite Aqui..." 
        value={input} onChange={(e) => setInput(e.target.value)}/>
          <button className="buttonSearch" onClick={handleSearch}>
            <FiSearch size={25} color="#FFF"/>
          </button>
      </div>

      <main className='main'>
        <h2 >CEP: 38050-060</h2>

        <span>Rua Goias </span>
        <span>Complemento: Algo</span>
        <span>Santa Maria </span>
        <span>Uberaba - MG</span>
        <span></span>
      </main>
    </div>
  );
}

export default App;
