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
    

    <GoogleMap defaultZoom={4} defaultCenter={{ lat: 38.5, lng: -97 }} defaultOptions={{ styles: mapStyles }}>
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
                  Address: {marker.street_address}
                  <br />
                  
                </div>
              </InfoWindow>}
            
          </Marker>
        )
      })}
    </GoogleMap>
    
  )
  
})

export default class CourseMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      golf_courses: [],
      selectedMarker: false
      
    }
  }

  
 

componentDidMount(){
    this.getGolfCourses();
}

  getGolfCourses = () => {
    axios
    .get("http://localhost:3001/golf_courses")
    .then(res => {
        this.setState({ golf_courses: res.data });
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
        markers={this.state.golf_courses}
        onClick={this.handleClick}
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBpVirntcFIy8-_MS23bABIiFm9QLhAwiw"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `960px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      
    )
  }
}