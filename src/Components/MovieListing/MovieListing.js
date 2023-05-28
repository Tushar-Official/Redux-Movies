import React from 'react'
import { useSelector } from 'react-redux'
import { getAllmovies } from '../../Features/Movies/MovieSlice'
import { MovieCard } from '../MovieCard/MovieCard';


export const MovieListing = () => {
    const movies=useSelector(getAllmovies);
    let renderMovies=""
    renderMovies=
    movies.Response ==="True"? (
        movies.Search.map((movie,index)=>(
            
           <MovieCard key={index} data={movie}/>
        ))
       
    ):(
        <div className="error">
        <h3>{movies.error}</h3></div>
        )
       
    
  return (
    
    <div className='movie-wrapper'>
    <div className='m-list'>
    <h2 className='text-3xl pt-8 pl-12 text-white font-bold'>Movies</h2>
    
    <div className='render-movie grid grid-cols-5 grid-rows-2 m-8'>{renderMovies}</div>
    </div>
    </div> 
     
  )
}
