import React from 'react';

// return the following error message when component is called
const Error = (props) => (
    <div className="container">
        <img src="%PUBLIC_URL%/sad-businessman.png" alt="Sad Businessman" height="200" />
        <br />
        <br />
        <h2>Page Not Found!</h2>
        <p>{props.location.pathname} does not exist or may have been moved.</p>

    </div>
);
// export component so it can be used elsewhere
export default Error;
