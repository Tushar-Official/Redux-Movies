import React from 'react'
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import { Home } from './Components/Home/Home';
import { MovieDetail } from './Components/MovieDetails/MovieDetail';
import {PageNotFound} from './Components/PageNotFound/PageNotFound'
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';

function App() {
  return (
    <>
   <Router>
   <Header/>
   <div className='mainBody'>
   <Routes>
   <Route path="/" exact element={<Home/>}/>
   <Route path="/movie/:imdbID" element={<MovieDetail/>}/>
   <Route path="*" element={<PageNotFound/>}/>
   
   </Routes>
   </div>
   <Footer/>
   </Router>
   
      
    </>
  );
}

export default App;
