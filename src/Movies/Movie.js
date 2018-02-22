import React from 'react';
import { Link } from 'react-router-dom';

let ratings = ["",1,2,3,4,5]
const Movie= ({movie , handleSelect , currentRating})=>{
  const { id, name, year, director, img, star, genre } = movie;
  console.log('c' + currentRating)
  // console.log('m' + movie)
  // console.log('h' + handleSelect)
  return <div>

    
      <h1>{name} [{year}] </h1>

      <img src={img}  height= "450"/>

      <h3> Director: {director} </h3>
      <p>Starring: {star}</p>
      <select value={currentRating} 
      values={ratings} 
      onChange={event =>{const rate = event.target.value; handleSelect(id,rate)}}> 
      {ratings.map(rating =>
            <option value={rating}>{rating}</option>)
      }      
      </select>
      <p><small><a href={movie.imdb}>{name} IMDB PROFILE</a></small></p>
      <Link to="/Movies"><img src="http://dl.ledtronics.com/ImagesAll/arrow_sign.gif" height="50"/></Link>
  </div>

};

export default Movie; 