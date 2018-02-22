import React from 'react';
import {Link , Switch , Route} from 'react-router-dom';
import  Movies from './Movies/Movies';
import Home from './Home';
import MovieGenres from './Movies/MovieGenres'
import Ratings from './Movies/Ratings'


const App = () =>(
  <div>
      <nav>
        <Link to="/">Home</Link>
        {" "}
        <Link to="/movies">Movies</Link>
        {" "}
        <Link to="/Movies/genres">Genres</Link>
        {" "}
        <Link to="/Movies/ratings">Ratings</Link>
      </nav>
      
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Movies" component={Movies} />
      </Switch>
  </div>
);



export default App;