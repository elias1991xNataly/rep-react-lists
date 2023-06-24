import './App.css';
import { useState } from 'react';
// import MoviesList from './components/MoviesList';
import ImprovedMovieList from './components/ImprovedMovieList/ImprovedMovieList';
import Spinner from './components/Spinner/Spinner';
// import ProjectList from './components/ProyectList';
// import SimpleList from './components/SimpleList';

const App = () => {
  //declaramos un estado nuevo que se llame isLoading
  const [isLoading, setisLoading] = useState(false);
  if (isLoading) {
    //Component Rendering
    return <Spinner />
  } else {

    return (
      <div className="App">
        {/* <SimpleList/>
      <ProjectList/> */}
        {/* <MoviesList /> */}
        <ImprovedMovieList />
      </div>
    )
  }
}

export default App;