import React from 'react'

export const MovieCard = (props) => {
  const {data}=props
  return (
    <>
    <div className='cursor-pointer mx-2 
    my-4 h-84 scroll-smooth bg-blue-950 hover:scale-90 scroll-m-3 shadow-sm shadow-black   '>
    <div className='posters '>
    <div className='card-Title'>
    <img src={data.Poster} alt={data.Title} className=' w-full h-54 '/>
    <div className='card-details px-2 py-2'>
    <h4 className='text-white px-2  font-semibold h-12'>{data.Title}</h4>
    <p className='text-white p-2 font-bold'>{data.Year}</p>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}
