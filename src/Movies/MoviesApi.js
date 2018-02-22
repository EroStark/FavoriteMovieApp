const movies = [
  { id: "a234", name: "5th Element", year: 1997, director: "Luc Besson", star: "Bruce Willis, Gary Oldman and Milla Jovovich", img: "https://static.rogerebert.com/uploads/movie/movie_poster/the-fifth-element-1997/large_yph0ZQC0I56CzQANxEMxj3x78gb.jpg", imdb:"http://www.imdb.com/title/tt0119116/", genre:["Action" ,"Adventure" , "Drama", "Fantasy"]},
  { id: "a345", name: "Lords Of DogTown", year: 2005, director:"Catherine Hardwicke" , star:"	Heath Ledger, Emile Hirsch and John Robinson", img: "https://upload.wikimedia.org/wikipedia/en/c/cc/Lords_of_dogtown.jpg", imdb: "http://www.imdb.com/title/tt0355702/", genre:["Sports" , "Drama" , "Biographical"]},
  { id: "b234", name: "Big Daddy", year: 1999, director: "Dennis Dugan", star: "Adam Sandler, Joey Lauren Adams, and the Sprouse twins", img: "https://upload.wikimedia.org/wikipedia/en/c/ca/Big_Daddy_film.jpg", imdb:"http://www.imdb.com/title/tt0142342/", genre:["Comedy", "Drama" , "Family"] },
  { id: "cda2", name: "Ghost of Girlfriends Past", year: 2009, director: "Mark Waters", star: " Matthew McConaughey, Breckin Meyer, and Jennifer Garner", img: "https://upload.wikimedia.org/wikipedia/en/c/c0/Ghosts_of_girlfriends_past.jpg", imdb:"http://www.imdb.com/title/tt0821640/", genre:["Romance" , "Comedy" , "Fantasy"] },
  { id: "def4", name: "Paid In Full", year: 2002, director: "Charles Stone III", star: " Wood Harris, Mekhi Phifer, and Cam'ron", img: "https://upload.wikimedia.org/wikipedia/en/7/72/Paidinfullposter.jpg", imdb: "http://www.imdb.com/title/tt0259484/", genre: ["Drama" , "Biographical" , "Action" , "Crime"] },
  {
    id: "eeg23", name: "Bajirao Mastani", year: 2015, director: "Sanjay Leela Bhansali", star: "Ranveer Singh,Deepika Padukone, Priyanka Chopra", img: "https://upload.wikimedia.org/wikipedia/en/c/c0/Bajirao_Mastani_poster.jpg", imdb: "http://www.imdb.com/title/tt3735246/", genre: ["Action", "Musical", "Biographical", "Drama"] }

  
]

const getAll = () => movies;

const getOne = id => movies.find(pet => pet.id === id);

const getSome = idArray =>
  movies.filter(movie => idArray.includes(movie.id));

const getGenres = () => 
  movies.map(movie => movie.genre)
    .reduce((genreList, genre) => [...genreList, ...genre])
    .filter((genre, index, genreList) => genreList.indexOf(genre) === index);

const getMoviesByGenre = genre =>
  movies.filter(movie => movie.genre.includes(genre));

export default {
  getOne,
  getAll,
  getSome,
  getGenres,
  getMoviesByGenre
};