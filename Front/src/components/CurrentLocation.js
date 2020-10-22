import React from 'react';

class CurrentLocation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            userAddress: null
        }
        this.getLocation = this.getLocation.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoordinates);
         } else {
            alert('piss');
        }
    }

    getCoordinates(postion) {
        this.setState({
            latitude: postion.coords.latitude,
            longitude: postion.coords.longitude
        })
       
    }

    

    render() {
        return (
            <div>
            <h2>Geolocation</h2>
            <button onClick={this.getLocation}>click</button>
            <p>{this.state.latitude}</p>
            <p>{this.state.longitude}</p>
            <p>{this.state.userAddress}</p>
           
            </div>
        )
    }
}

export default CurrentLocation;

