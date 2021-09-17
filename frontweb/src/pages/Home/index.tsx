import Login from '../../components/Login';
import './styles.css';

const Home = () => {
    return (
        <div className="home-container">

            <div className="base-card home-card">
                <div className="home-content-container">
                    <Login />
                  </div> 
            </div>
        </div>
    );
}

export default Home;