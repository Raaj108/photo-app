import React, { useState, useEffect } from 'react';
import axios from 'axios';
//new: 58214ab914962a3b825b63a2306b696dca9f8a58bfa5bf6a0e8affc4213ed62c
//old: de31bf154ddcc3ff4c380dcf5c21808a3899b02a88fbf7cfbb11dbb1d02d35e1

const PhotoGrid = () => {  
    
    const [images, setImages] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    
    const fetchImages = (count = 30) => {
        axios.get(`https://api.unsplash.com/photos/random?client_id=58214ab914962a3b825b63a2306b696dca9f8a58bfa5bf6a0e8affc4213ed62c&count=${count}`)
            .then(res => { 
                setImages([...images, ...res.data]);           
                setIsLoaded(true);  
                console.log(res.data)
            }).catch(err => {
                console.log(err)
            })
    }    
    
    const UnsplashImage = () => {
        const col1 = images.filter((image,index) => index <= 10).map((image, index) => {return(<img src={image.urls.regular} className="image" key={index} /> )});
        const col2 = images.filter((image,index) => index > 10 && index <= 20).map((image, index) =>{return(<img src={image.urls.regular} className="image" key={index} />)});
        const col3 = images.filter((image,index) => index > 20 && index <= 30).map((image, index) =>{return(<img src={image.urls.regular} className="image" key={index} />)});
        const col4 = images.filter((image,index) => index > 30 && index <= 40).map((image, index) =>{return(<img src={image.urls.regular} className="image" key={index} />)});
        return(
            <div className="flex p-2 bd-highlight">
                <div className="flex-item" id="col1">{col1}</div>
                <div className="flex-item" id="col1">{col2}</div>
                <div className="flex-item" id="col1">{col3}</div>
                <div className="flex-item" id="col1">{col4}</div>
            </div>
        )
    }    
  
    const handleScroll = (e) =>{
        e.stopPropagation();
        const windowScrolled = window.scrollY;
        const photoGridHeight = document.getElementById('photoGrid').offsetHeight ;
        if( (photoGridHeight -  windowScrolled) < 1000 ){
            fetchImages();
        }      
    }

    useEffect(()=>{
        fetchImages();  
        
        window.addEventListener('scroll', handleScroll);
        
        return () =>{window.removeEventListener('scroll', handleScroll);}
        
    },[isLoaded]);
    
    return(
      <div className="photo-grid" id="photoGrid">
            {
                isLoaded ? <UnsplashImage></UnsplashImage> : 
                <div className="loading-container">
                    <div className="">Loading...</div>
                </div>
            }
      </div>
    )  
}

export default PhotoGrid;

