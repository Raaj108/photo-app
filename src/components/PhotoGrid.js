import React, { Component } from 'react';


class PhotoGrid extends Component { 
 
  render(){
    const { imgList } = this.props;
    
    const imgGrid = imgList.length ? (
      imgList.map(img=>{
        console.log(img)
       return (
         <img src={img.urls.thumb} alt={img.alt_description} key={img.id}></img>
       )      
      })
    ) : (
      <p className="loading text-center">Loading Images...</p>
    )
    
    return(
      <div className="container">
        {imgGrid}
      </div>
    )
  }
}

export default PhotoGrid;