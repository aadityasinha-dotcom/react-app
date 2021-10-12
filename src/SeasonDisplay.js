import React from 'react';

class App extends React.Component {
    constructor(props){
        super(props);
    }
    //hello
    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (err) => console.log(err)
        );
        return <div>Latitude: </div>;
    }
}

export default SeasonDisplay;