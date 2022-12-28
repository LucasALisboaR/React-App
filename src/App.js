import { FiSearch } from 'react-icons/fi';
import { styles } from './styles.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>
      <div className="containerInput">
        <input type="text" placeholder="Digite Aqui..."/>
          <button className="buttonSearch">
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
