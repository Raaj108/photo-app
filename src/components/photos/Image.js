import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const Image = (props) => {
    const { selectedImage } =  props ;
    let image = (typeof selectedImage.urls !== "undefined") ? (
            <img src={selectedImage.urls.full} className="img-fluid image"></img>
         ) : (
            <div>
                <p>Loading...</p>
             </div>
         );
   
    return (
        <div className="container">
            <div className="image-container">
                {image}   
            </div>                 
        </div>
    )
}

const mapStateToProps = (state) => {    
    return {
        selectedImage : state.selectedImage
    }
}

export default connect(mapStateToProps)(Image);