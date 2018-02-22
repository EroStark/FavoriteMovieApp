import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import MoviesApi from './MoviesApi';
import MovieList from './MovieList';
import Movie from './Movie';
import MovieGenres from './MovieGenres'
import Ratings from './Ratings'

class Movies extends React.Component{
  
  constructor(){
    super();
    this.state = {
      ratingList: []
    }
  }

  handleSelect = (id,rate) =>{
    // console.log(id, rate, this.state.rated)
    
    // this.setState({
    //   rated: [...this.state.rated, {[id]: rate}]
    //   })
    this.setState({
      [id]: rate
    })
  }

  renderMovieList = () => {
    const movies = MoviesApi.getAll();
    return <MovieList movies= {movies} />
  }

  renderMovie = props => {
      const { id } = props.match.params
      console.log(id)
      console.log(this.state)
      console.log(this.state[id])

      const movie = MoviesApi.getOne(id)


      if(!movie){
        return <div> could not find movie </div>;
      } else {
          return <Movie movie={movie} currentRating={this.state[id]} handleSelect={this.handleSelect} />;
      }

  }

  renderRatings = () => {
    return <Ratings ratedList={this.state}/>
  }

  
  render() {
    // console.log("Movie State?" , this.state)
    return(
        <div>
          <Switch>
            <Route exact path="/Movies" render={this.renderMovieList} />
            <Route path="/Movies/one/:id" render={this.renderMovie} />
            <Route exact path="/Movies/Genres" component={MovieGenres} />
            <Route exact path="/Movies/ratings" render={this.renderRatings} />
          </Switch>
        </div>

    );
  }

}

export default Movies;