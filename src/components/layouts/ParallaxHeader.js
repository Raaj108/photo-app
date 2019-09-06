import React from 'react';
import SearchForm from '../search/SearchForm';

const ParallaxHeader = () => {
  return (
    <header className="parallax-container"> 
      <div className="header-content">
        <h1 className="title text-center">Photostack</h1>
        <h4 className="sub-title text-center">High resolution free stock photos.</h4>
        <SearchForm></SearchForm>
      </div>            
    </header> 
  );
}

export default ParallaxHeader;