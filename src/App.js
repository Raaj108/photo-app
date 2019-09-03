import React, { useEffect } from 'react';
import PhotoGrid from './components/PhotoGrid';
import SearchImages from './components/SearchImages';
import Image from './components/Image';
import ParallaxHeader from './components/ParallaxHeader';
import { connect } from 'react-redux';
import { fetchImages } from './redux/actions/imagesAction';
import { BrowserRouter, Route } from  'react-router-dom';


const App = () => { 
    return (
        <BrowserRouter>
          <div className="App">       
              <ParallaxHeader></ParallaxHeader>
              <Route exact path="/" component={PhotoGrid}></Route>      
              <Route path="/image/:id" component={Image}></Route>             
              <Route exact path="/search/photos" component={SearchImages}></Route>             
          </div>
        </BrowserRouter>
    ); 
}


export default App;
