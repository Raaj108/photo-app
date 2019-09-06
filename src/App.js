import React, { useEffect } from 'react';
import ParallaxHeader from './components/layouts/ParallaxHeader';
import SearchImages from './components/search/SearchImages';
import PhotoGrid from './components/photos/PhotoGrid';
import Image from './components/photos/Image';
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
