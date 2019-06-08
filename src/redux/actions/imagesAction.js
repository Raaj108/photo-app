import axios from 'axios';

export const fetchImages = (count) => {
    
    return (dispatch, getState) => {        
        const apiKey = "de31bf154ddcc3ff4c380dcf5c21808a3899b02a88fbf7cfbb11dbb1d02d35e1";
        const url = "https://api.unsplash.com/photos/random?client_id=" + apiKey + "&count=" + count;
        
         axios.get(url)
        .then(res => {
            console.log("Fetched");
            dispatch({type:"FETCH_IMAGES", imgArr : res.data});           
        })
        .catch(err => {
            console.log("Error Occured");
            dispatch({type:"FETCH_IMAGES_ERROR", errorMsg : err});       
        })
    }  
}


export const fetchImage = (imageId) => {
    return (dispatch) =>{ 
        const apiKey = "de31bf154ddcc3ff4c380dcf5c21808a3899b02a88fbf7cfbb11dbb1d02d35e1";
        const url = "https://api.unsplash.com/photos/"+imageId+"?client_id=" + apiKey;
         axios.get(url)
            .then(res => {
                console.log("Fetched");
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