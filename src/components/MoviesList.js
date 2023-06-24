import { useState } from "react";
import moviesData from "../movies-data.json";
import MovieCard from "./MovieCard";

const MoviesList = () => {
    const [movies, setMovies] = useState(moviesData)
    // const deleteMovie = () => {

    // }

    const deleteMovie = movieID => {
        const filteredMovies = movies.filter(movie => {
            return movie._id !== movieID;
        });
        setMovies(filteredMovies)
    }

    return (
        <div>
            <h2>Movie List</h2>
            {movies.map(movie => {
                return (
                    <div>
                        <MovieCard key={movie._id} movie={movie} clickToDeleteMovie={deleteMovie} />
                    </div>
                    // <div key={movie._id} className="MovieCard">
                    //     <h2>{movie.title}</h2>
                    //     <h3>Director{movie.director}</h3>
                    //     <p>Rating: {movie.IMDBRating}</p>
                    //     <button onClick={() => deleteMovie(movie._id)} className="btn-delete"> Delete</button>
                    // </div>
                )
            })}
        </div>
    )
}
export default MoviesList;