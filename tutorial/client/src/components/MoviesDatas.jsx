import React, { useState } from 'react'
import { useQuery ,useLazyQuery} from "@apollo/client"
import { QUERY_ALL_MOVIES,MOVIES_BY_NAME} from "../DefineDatas"


const MoviesDatas = () => {

  const [movieSearched, setMovieSearched] = useState("");

  const {data}=useQuery(QUERY_ALL_MOVIES)
  const [fetchMovie, {data: searchedData, error: MovieEror}]=useLazyQuery(MOVIES_BY_NAME);
    
  return (
    <div className='Movie'>
      <h1>MoviesDatas</h1>
      <div className='cards'>
      {data && 
       data.movies.map((movie)=> (
        <div className="user-card" key={movie.id}>
        <h1 className="user-info">Name: {movie.name}</h1>
        <h1 className="user-info">release: {movie.yearOfPublication}</h1>
        <h1 className="user-info">platform: {movie.isInTheaters === true ? "in theatres" : "in Ott"}</h1>
      </div>
       ))
      }
       </div>

    
      {/**search movie */}

    <div className="search-container">
      <input
       type="text"
       className="search-input"
       placeholder="Interstellar..."
       onChange={(event) => {
         setMovieSearched(event.target.value);
        }}
     />
     <button className="search-button" onClick={()=> {
       fetchMovie({
        variables: { name: movieSearched}
       })
     }}>
       Search
      </button>
      </div>

      <div className="movie-container">
     {searchedData ? (
       <div className="movie-details">
      <h1 className="movie-title">Movie Name: {searchedData.movie.name}</h1>
      <h2 className="movie-year">
        Year Of Publication: {searchedData.movie.yearOfPublication
        }
      </h2>
    </div>
     ) : MovieEror ? (
      <h1 className="error-message">There is no movie with name</h1>
     ) : (
     <h6>Please search something!</h6>
     )}
   </div>

     




    </div>
  )
}

export default MoviesDatas