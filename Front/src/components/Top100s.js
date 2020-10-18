import React, { Component } from "react"
import { compose, fromRenderProps } from "recompose"
import axios from 'axios'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps"
import mapStyles from "./mapStyles";

const MapWithAMarker = compose(withScriptjs, withGoogleMap)(props => {

  return (
    

    <GoogleMap defaultZoom={8} defaultCenter={{ lat: 40.5, lng: -80 }} defaultOptions={{ styles: mapStyles }}>
      {props.markers.map(marker => {
        const onClick = props.onClick.bind(this, marker)
        return (
          <Marker
            key={marker.id}
            onClick={onClick}
            position={{ lat: marker.latitude, lng: marker.longitude }}
            
          >
            {props.selectedMarker === marker &&
              <InfoWindow>
                <div>
                  Course Name: {marker.name}
                  <br />
                  Rank: {marker.rank}
                  <br />
                  Description: {marker.description}
                  <br />
                  
                  
                </div>
              </InfoWindow>}
            
          </Marker>
        )
      })}
    </GoogleMap>
    
  )
  
})

export default class Top100 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      top100s: [],
      selectedMarker: false
      
    }
  }

  
 

componentDidMount(){
    this.getTop100s();
}

  getTop100s = () => {
    axios
    .get("http://localhost:3001/top100s")
    .then(res => {
        this.setState({ top100s: res.data });
    })
    .catch(err => {
        console.log(err);
    });
};
  handleClick = (marker, event) => {
    // console.log({ marker })
    this.setState({ selectedMarker: marker })
  }
  render() {
    return (
      
      <MapWithAMarker
        selectedMarker={this.state.selectedMarker}
        markers={this.state.top100s}
        onClick={this.handleClick}
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBpVirntcFIy8-_MS23bABIiFm9QLhAwiw"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      
    )
  }
}