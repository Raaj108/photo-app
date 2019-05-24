import React, { Component } from 'react';
import axios from 'axios'
import PhotoGrid from './components/PhotoGrid';

class App extends Component {
  
  state = {
    imgs : []
  }
  
  componentDidMount() {
   axios.get('https://api.unsplash.com/photos/?client_id=de31bf154ddcc3ff4c380dcf5c21808a3899b02a88fbf7cfbb11dbb1d02d35e1').then(data => {
     this.setState({
       imgs: data.data
     })    
   }).catch(err => {
     console.log(err)
   })
 }
  
  render(){ 
    return (
      <div className="App">
        <h1>Test</h1>
        <PhotoGrid imgList= {this.state.imgs}></PhotoGrid>
      </div>
    );
  } 
}

export default App;
