import React from 'react';

const SeasonDisplay = () =>  {
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (err) => console.log(err)
    );

    return <div>Hi there!</div>
}

export default SeasonDisplay;