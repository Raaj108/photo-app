import React from 'react';
import { connect } from 'react-redux';
import { searchImages } from '../../redux/actions/imagesAction';
import { createBrowserHistory } from 'history';

const SearchForm = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const history = createBrowserHistory();
        let keyword = document.getElementById("search").value;
        props.searchImages(keyword);        
        history.push('/search/photos');
    }
    
    return (                 
        <form id="searchForm" className="form-inline" onSubmit={handleSubmit}>
            <div className="form-group">
                <input type="text" className="form-control" id="search" placeholder="Search high resolution photos"></input>   
                <button type="submit" id="searchBtn"><i className="fas fa-search"></i></button>
            </div>            
        </form>         
    );
}


const mapDispatchToProps = (dispatch) => {
    return {
        searchImages : (keyword) => {dispatch(searchImages(keyword))}
    }
}

export default connect(null, mapDispatchToProps)(SearchForm);