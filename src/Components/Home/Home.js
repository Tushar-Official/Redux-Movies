 import React, { useEffect } from 'react'
import { MovieListing } from '../MovieListing/MovieListing'
import MovieApi from '../../Common/apis/MovieApi'
import { APIKey } from '../../Common/apis/Movieapikey'
import { useDispatch } from 'react-redux'
import { addMovies } from '../../Features/Movies/MovieSlice'
 export const Home = () => {
    const dispatch=useDispatch();
    const movieText="BatMan";
    useEffect(()=>{
        const fetchMovies=async()=>{
            
            const response=await MovieApi
            .get(`?apiKey=${APIKey}&s=${movieText}`)
            .catch((err)=>{
                
            })
            dispatch(addMovies(response.data))
        }
        
            fetchMovies();
        
    },[]);
   return (
    <>
     <div className='banner'></div>
     <div><MovieListing/>
     </div>
     </>
   )
 }
 