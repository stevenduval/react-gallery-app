import React from 'react';
import Photo from './Photo';

// return images when component is called
const PhotoContainer = ({results, term}) => {
    //set photo value depending upon results
    let photo = (results.length > 0) ? 
        // if results exist
        results.map(image => <Photo {...image} key={image.id}/>):
        // if no results
        <li className="not-found"><h3>No Results Found</h3><p>You search did not return any results. Please try again.</p></li>;
    return (
        // return results
        <div className="photo-container">
            <h2>Results for : {term}</h2>
            <ul>
                {photo}
            </ul>
        </div>
    );
}
// export component so it can be used elsewhere
export default PhotoContainer;