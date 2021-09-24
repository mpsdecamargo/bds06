import { Router, Switch, Route } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MovieList from './pages/MovieList';
import history from './util/history';


const Routes = () => (

   
      <Router  history ={history}>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/movies" exact>
                <MovieList />
            </Route>
            <Route path="/movies/:movieId" >
                <MovieDetails />
            </Route>
            
        </Switch>
      </Router>
      
)

export default Routes;