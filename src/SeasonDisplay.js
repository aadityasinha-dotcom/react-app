import React from 'react';

const SeasonDisplay = () =>  {
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (err) => console.log(err)
    );

    return <div>Latitude: </div>;
};

class App extends React.Component {
    render() {
        return <div>Latitude: </div>;
    }
}

export default SeasonDisplay;