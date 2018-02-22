import React from 'react';
import MoviesApi from './MoviesApi';
import MovieList from './MovieList';


class MovieGenres extends React.Component{

  constructor(){
    super();
    this.state = {
        selectedGenre: ""
    };
  }

  handleSelect = e => {
    this.setState({
      selectedGenre: e.target.value
    })
  }


  render(){
      const {selectedGenre} = this.state
      const genres = MoviesApi.getGenres();
      const moviesByGenre = MoviesApi.getMoviesByGenre(selectedGenre)
    console.log('words')
    return(
      <div>
        <select value={selectedGenre} onChange={this.handleSelect}>
          {["", ...genres].map(genre => <option value={genre}>{genre}</option>)}
        </select> 

        <MovieList movies={moviesByGenre} />
      </div>
    )
  }
}


export default MovieGenres;