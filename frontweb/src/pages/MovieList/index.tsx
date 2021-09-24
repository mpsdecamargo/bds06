import { Link } from 'react-router-dom';
import './styles.css';

const MovieList = () => {
  return (
    <div className="list-card">
      <div className="title-container">
        <h2>Tela Listagem de filmes</h2>
      </div>
      <div className="list-container">
        <ul>
          <li>
            <Link to="/movies/1">Acessar /movies/1</Link>
          </li>
          <li>
            <Link to="/movies/2">Acessar /movies/2</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieList;
