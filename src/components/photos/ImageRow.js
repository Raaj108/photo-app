import React from 'react';

const ImageRow = (props) => { 
  const { imgArr, handleClick } = props;
  const imgArr1  = []; 
  const imgArr2  = [];
  const imgArr3  = []; 
        
  for ( let i = 0; i < imgArr.length; i++) {
      if ((i + 1) % 3 === 0) {
          imgArr3.push(imgArr[i]);
      } else if ((i + 1) % 2 === 0) {
          imgArr2.push(imgArr[i]);
      } else {
          imgArr1.push(imgArr[i]);
      }
  }
         
  const col1 = imgArr1.map((image, index) => {
    return(
      <img src={image.urls.regular} id={image.id} className="image" key={index} onClick={handleClick}/>
    )
  });
  const col2 = imgArr2.map((image, index) => {
    return(
      <img src={image.urls.regular} id={image.id} className="image" key={index} onClick={handleClick}/>
    )
  });
  const col3 = imgArr3.map((image, index) => { 
    return(
      <img src={image.urls.regular} id={image.id} className="image" key={index} onClick={handleClick}/>
    )
  });
  
  return(
    <div className="flex p-2 bd-highlight">
        <div className="flex-item" id="col1">
            <div className="image-column">{col1}</div>
        </div>    
        <div className="flex-item" id="col2">
            <div className="image-column">{col2}</div>
        </div>
        <div className="flex-item" id="col3">
             <div className="image-column">{col3}</div>
        </div>
    </div>  
  )
}

export default ImageRow;