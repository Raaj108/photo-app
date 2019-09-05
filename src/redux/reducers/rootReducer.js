const initState = {
    imgArr: [],
    isLoaded: false,
    isSearched: false,
    selectedImage: {},
    errors: ""
}

const rootReducer = (state = initState, action) => {
    console.log(action.type)
    switch (action.type) {
        case "FETCH_IMAGES":
            return {
                ...state,
                imgArr: action.imgArr,
                    isLoaded: true
            };
        case "FETCH_IMAGES_ERROR":
            return {
                ...state,
                errors: action.errorMsg
            };
        case "FETCH_MORE_IMAGES":
            console.log(state)
            console.log(action.imgArr)
            return {                
                ...state,
                imgArr: [...state.imgArr , ...action.imgArr],
                    isLoaded: true
            };
        case "FETCH_MORE_IMAGES_ERROR":
            
            return {
                ...state,
                errors: action.errorMsg
            };
        case "SEARCH_IMAGES":
            return {
                ...state,
                imgArr: action.imgArr,
                    isSearched: true
            };
        case "SEARCH_IMAGES_ERROR":
            return {
                ...state,
                errors: action.errorMsg
            };
        case "FETCH_IMAGE":
            return {
                ...state,
                selectedImage: action.imgObj
            };
        case "REMOVE_IMAGE":            
            return {
                ...state,
                selectedImage: {}
            };
        default:
            return state;
    }
}

export default rootReducer;
