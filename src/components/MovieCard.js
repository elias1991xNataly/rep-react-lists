const MovieCard = (props) => {
    const { movie, clickToDeleteMovie } = props;
    // const { movie } = props;
    // <h2>{props.movies.title}</h2>
    //etc
    return (
        <div key={movie._id} className="MovieCard">
            <h2>{movie.title}</h2>
            <h3>Director{movie.director}</h3>
            <p>Rating: {movie.IMDBRating}</p>
            {/* Conditional Rendering */}
            {/* {movie.hasOscars && <p>Got the Oscar</p>}
            {!movie.hasOscars && <p>Haven't got the oscar</p>} */}
            {movie.hasOscars ? <p>Got the Oscar</p> : <p>Haven't got the oscar</p>}
            <button onClick={() => clickToDeleteMovie(movie._id)} className="btn-delete"> Delete</button>
        </div>
    )
}
export default MovieCard;