import React, { useEffect } from 'react';
import PhotoGrid from './components/PhotoGrid';
import Image from './components/Image';
import { connect } from 'react-redux';
import { fetchImages } from './redux/actions/imagesAction';
import { BrowserRouter, Route } from  'react-router-dom';


const App = (props) => {  
    
    const {imgArr, isLoaded } = props; 
    
    useEffect(()=>{
        props.fetchImages(50);
    },[]);  
    
    return (
        <BrowserRouter>
          <div className="App">       
            <div className="container">            
                <h1 className="text-center">Photostack</h1>           
            </div> 
              <Route exact path="/" component={PhotoGrid}></Route>      
              <Route path="/image/:id" component={Image}></Route>             
          </div>
        </BrowserRouter>
    ); 
}

const mapStateToProps = (state) => {   
    return {
        imgArr : state.imgArr,
        isLoaded: state.isLoaded
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchImages: (count) => {dispatch(fetchImages(count))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
