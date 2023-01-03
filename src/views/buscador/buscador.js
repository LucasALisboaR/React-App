import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './buscador.css';

import api from '../../services/api'

function Buscador() {
  const [input, setInput] = useState('');
  const [cep, setCep] = useState('');

  async function handleSearch() {
    if (input === '') {
      alert("Preencha o campo")
      return;
    }
    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      console.log(response.data)
      setInput('')
    } catch (error) {
      alert(`Erro ao buscar ${input}, tente novamente!`)
      setInput('');
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>
      <div className="containerInput">
        <input type="text" placeholder="Digite Aqui..."
          value={input} onChange={(e) => setInput(e.target.value)} />
        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#FFF" />
        </button>
      </div>

      {Object.keys(cep).length > 0 && (
        <main className='main'>
          <h2 >CEP: {cep.cep}</h2>

          <span>{cep.logradouro} </span>
          <span>Complemento: {cep.complemento}</span>
          <span>{cep.bairro} </span>
          <span>{cep.localidade} - {cep.uf}</span>
          <span></span>
        </main>
      )}
    </div>
  );
}

export default Buscador;