import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({movies}) => (
    <nav>
      {movies.map(movie => (
        
        
            <Link to= {`/movies/one/${movie.id}`} >
          <img src={movie.img} height="200" /> <br/> {movie.name} [{movie.year}] 
             <br /> </Link> 
        
      ))}
    </nav>


)

export default MovieList;