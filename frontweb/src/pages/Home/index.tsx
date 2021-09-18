import Login from '../../components/Login';
import './styles.css';
import { ReactComponent as Desenho } from '../../assets/images/Desenho.svg';

const Home = () => {
  return (
    <div className="home-container">
      <div className="base-card home-card">
        <div className="home-content-container">
          <h1>Avalie Filmes</h1>
          <p>Diga o que você achou do seu filme favorito</p>
          <div className="image-container">
            <Desenho />
          </div>
        </div>
      </div>
      <div className="login-container-card">
        <div className="login-container">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Home;
