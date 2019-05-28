import React from 'react';
import PhotoGrid from './components/PhotoGrid';


const App = () => {  
    
    return (
      <div className="App">       
        <div className="container">            
            <h1 className="text-center">Photostack</h1>           
        </div>  
        <PhotoGrid></PhotoGrid>              
      </div>
    ); 
}

export default App;
