import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';


const App = () => {
    const [movies, setMovies] = useState([
      {
            Title: 'Iron Man',
            Description:<button type="button" class="btn btn-secondary">Description</button>,
            Poster:'https://vignette.wikia.nocookie.net/marvelstudios/images/1/1e/Iron_Man_Official_Poster.jpg/revision/latest?cb=20150825155355&path-prefix=fr',
            Rate: 5,
            Id:uuidv4(),
            Trailer:'https://www.youtube.com/watch?v=KAE5ymVLmZg',
        },
        {
            Title: 'Iron Man The Sequal ',
            Description:<button type="button" class="btn btn-secondary">Description</button>,
            Poster:'https://geekytourist.files.wordpress.com/2019/03/iron-man-2-filming-locations.jpg',
            Rate: 4,
            Id:uuidv4(),
            Trailer:'https://www.youtube.com/watch?v=oOzuBOefL8I',
        },
        {
            Title: 'Iron Man Third Installment ',
            Description:<button type="button" class="btn btn-secondary">Description</button>,
            Poster:'https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_.jpg',
            Rate: 3,
            Id:uuidv4(),
            Trailer:'https://www.youtube.com/watch?v=oYSD2VQagc4',

        },
    ]);
    
    const addMovie = (Title, Description, Poster, Rate, Id, Trailer) => {
        setMovies([
          ...movies,
          { Title, Description, Poster, Rate, Id, Trailer },
        ]);
      };
      return (
        <div className="App">
          <h3 style={{ color: "white", fontFamily: "serif" }}>Movies List</h3>
          <MovieList movies={movies} />
          <AddMovie addMovie={addMovie} />
        </div>
      );
    };
    
    export default App;
