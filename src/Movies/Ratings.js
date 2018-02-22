import React from "react";
import MovieList from "./MovieList";
import MoviesApi from "./MoviesApi"
import Movies from "./Movies"

console.log("current state?:",Movies)
class Ratings extends React.Component {
  constructor() {
    super();

    this.ratings = ["", 1, 2, 3, 4, 5]

    this.state = {
      selectedRating: "",
      
    };
  }

  handleSelect = e => {
    this.setState({ selectedRating: e.target.value });
  };

  

  render() {
    const { selectedRating } = this.state;
    const {ratedList} = this.props;
    const idList = Object.keys(ratedList);

    const specificRatingList = idList.filter( id =>{
        return ratedList[id] === selectedRating
    })

    const selectedRatingMovieList = MoviesApi.getSome(specificRatingList);
      
      // console.log(ratedList)
      // console.log(idList)
      console.log(specificRatingList)
      console.log(selectedRatingMovieList)



    return (
      <div>
        <div>
          <select
            values={this.ratings}
            onChange={this.handleSelect}>
            {[...this.ratings].map(rating => (
              <option value={rating}>{rating}</option>
            ))}
          </select>
        </div>

        <MovieList movies={selectedRatingMovieList} />
      </div>
    );
  }
}

export default Ratings