import React from 'react';
import Photo from './Photo';

// return images when component is called
const PhotoContainer = (props) => {
    // capture api results to be used in images
    const imageProps = props.results;
    // check if results exist before parsing images
    let photo = (imageProps.length > 0) ? 
        // if results exist
        imageProps.map(image => <Photo {...image} key={image.id}/>):
        // if no results
        <li className="not-found"><h3>No Results Found</h3><p>You search did not return any results. Please try again.</p></li>;
    return (
        // return results
        <div className="photo-container">
            <h2>Results for : {props.term}</h2>
            <ul>
                {photo}
            </ul>
        </div>
    );
}
// export component so it can be used elsewhere
export default PhotoContainer;