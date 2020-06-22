import React from 'react';

// return <li> with image tag for each image called
const Photo = ({id, farm, server, secret, title}) => (
    <li key={id}>
        <img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} alt={title} />
    </li>
);
// export component so it can be used elsewhere
export default Photo;