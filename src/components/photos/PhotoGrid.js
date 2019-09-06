import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchImage, fetchImages, fetchMoreImages, removeImage } from '../../redux/actions/imagesAction';
import ImageRow from './ImageRow';

//new: 58214ab914962a3b825b63a2306b696dca9f8a58bfa5bf6a0e8affc4213ed62c
//old: de31bf154ddcc3ff4c380dcf5c21808a3899b02a88fbf7cfbb11dbb1d02d35e1

const PhotoGrid = (props) => { 
    const { imgArr, isLoaded, isSearched } = props;     
    
    let page = 1;
    
    useEffect(()=>{        
        props.removeImage(); 
        if(page > 1){
            props.fetchMoreImages(page)	
        }else{
            props.fetchImages(page)
        }        
        window.addEventListener('scroll', handleScroll);        
        return () =>{window.removeEventListener('scroll', handleScroll);}
    },[])
    
    const handleClick = (e) => {
        const imgId = e.target.id;        
        props.fetchImage(imgId);
        props.history.push('/image/'+imgId)
    }
    
    let photoGridHeight = 3500;  
    const handleScroll = (e) =>{
        e.stopPropagation();
         
        let windowScrolled = window.scrollY;       
        console.log(windowScrolled)
        console.log(photoGridHeight)
        if( (photoGridHeight -  windowScrolled) < 1100 ){ 
          page++;
          console.log("called :" + page)
          props.fetchMoreImages(page)
          photoGridHeight += 3000;
        }      
    }   
        
  
    return(
      <div className="photo-grid" id="photoGrid">
        {
          isLoaded ? <ImageRow imgArr={imgArr} handleClick={handleClick}></ImageRow> : 
          <div className="loading-container">
              <div className="">Loading...</div>
          </div>
        }
      </div>
    )  
}

const mapStateToProps = (state) =>{
    return {
        imgArr : state.imgArr,
        isLoaded: state.isLoaded,
        isSearched: state.isSearched
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        fetchImage : (imgId) => {dispatch(fetchImage(imgId))},
        removeImage : () => {dispatch(removeImage())},
        fetchImages: (page) => {dispatch(fetchImages(page))},
        fetchMoreImages: (page) => {dispatch(fetchMoreImages(page))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGrid);

