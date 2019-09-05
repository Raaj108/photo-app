import axios from 'axios';

export const fetchImages = (pageNumber) => {    
    return (dispatch, getState) => {        
        const apiKey = "de31bf154ddcc3ff4c380dcf5c21808a3899b02a88fbf7cfbb11dbb1d02d35e1";
        const url = "https://api.unsplash.com/photos/?&client_id=" + apiKey + "&page=" + pageNumber ;        
         axios.get(url)
        .then(res => {            
            dispatch({type:"FETCH_IMAGES", imgArr : res.data});           
        })
        .catch(err => {
            console.log("Error Occured");
            dispatch({type:"FETCH_IMAGES_ERROR", errorMsg : err});       
        })
    }  
}

export const fetchMoreImages = (pageNumber) => {    
    return (dispatch, getState) => {        
        const apiKey = "de31bf154ddcc3ff4c380dcf5c21808a3899b02a88fbf7cfbb11dbb1d02d35e1";
        const url = "https://api.unsplash.com/photos/?&client_id=" + apiKey + "&page=" + pageNumber ;        
         axios.get(url)
        .then(res => {            
            dispatch({type:"FETCH_MORE_IMAGES", imgArr : res.data});           
        })
        .catch(err => {
            console.log("Error Occured");
            dispatch({type:"FETCH_MORE_IMAGES_ERROR", errorMsg : err});       
        })
    }  
}

export const searchImages = (keyword) =>{    
    return (dispatch) => {
         const apiKey = "de31bf154ddcc3ff4c380dcf5c21808a3899b02a88fbf7cfbb11dbb1d02d35e1";
        const url = "https://api.unsplash.com/search/photos/?&client_id=" + apiKey + "&query=" + keyword ;        
         axios.get(url)
        .then(res => {
            console.log(res.data);             
           dispatch({type:"SEARCH_IMAGES", imgArr : res.data})  
         })
        .catch(err => {
            console.log("Error Occured");
            dispatch({type:"SEARCH_IMAGES_ERROR", errorMsg : err});       
        })         
    }
}

export const fetchImage = (imageId) => {
    return (dispatch) =>{ 
        const apiKey = "de31bf154ddcc3ff4c380dcf5c21808a3899b02a88fbf7cfbb11dbb1d02d35e1";
        const url = "https://api.unsplash.com/photos/"+imageId+"?client_id=" + apiKey;
         axios.get(url)
            .then(res => {               
                dispatch({type:"FETCH_IMAGE", imgObj : res.data});           
            })
            .catch(err => {
                console.log("Error Occured");
                dispatch({type:"FETCH_IMAGE_ERROR", errorMsg : err});       
            })   
    }
}

export const removeImage = ()=>{
    return (dispatch)=> {
        dispatch({type:"REMOVE_IMAGE"})
    }
}