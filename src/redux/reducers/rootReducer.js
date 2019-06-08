const initState = {
    imgArr : [],
    isLoaded : false,
    selectedImage: {},
    errors : ""
}

const rootReducer = ( state = initState, action) => {
    switch(action.type){
        case "FETCH_IMAGES" :
           return {
                ...state, 
                imgArr: action.imgArr, 
                isLoaded:true
            }; 
        case "FETCH_IMAGES_ERROR" : 
            return {
                ...state,
                errors:action.errorMsg
            }
        case "FETCH_IMAGE" : 
            return {
                ...state,
                selectedImage:action.imgObj
            }
        case "REMOVE_IMAGE" : 
            return {
                ...state,
                selectedImage:{}
            }
        default :
             return state;
    }   
}

export default rootReducer;

