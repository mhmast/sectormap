/* global google */ 
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {withScriptjs,
  withGoogleMap,
  GoogleMap} from 'react-google-maps';
  import { compose, withProps } from "recompose";
  import _ from "lodash";
  // import autoBind from "react-auto-bind";
import  { SearchBox } from "react-google-maps/lib/components/places/SearchBox";

class Map  extends React.Component 
{
constructor(props)
{
  super(props);
  this.onBoundsChanged = this.onBoundsChanged.bind(this);
  this.onSearchBoxMounted = this.onSearchBoxMounted.bind(this);
  this.onPlacesChanged = this.onPlacesChanged.bind(this);
  this.onMapMounted = this.onMapMounted.bind(this);
}

   onBoundsChanged() {
        this.setState({
          bounds: this.state.map.getBounds(),
          center: this.state.map.getCenter(),
        })
      }

      onSearchBoxMounted(ref) {
        this.setState({
            searchBox:ref
          });
      }
      onPlacesChanged(){
        const places = this.state.searchBox.getPlaces();
        const bounds = new google.maps.LatLngBounds();

        places.forEach(place => {
          if (place.geometry.viewport) {
            bounds.union(place.geometry.viewport)
          } else {
            bounds.extend(place.geometry.location)
          }
        });
        const nextMarkers = places.map(place => ({
          position: place.geometry.location,
        }));
        const nextCenter = _.get(nextMarkers, '0.position', this.state.center);

        this.setState({
          center: nextCenter,
          markers: nextMarkers,
        });
        this.state.map.fitBounds(bounds);
      }

      onMapMounted(ref){
        this.setState({
          map:ref});
      }

  componentWillMount() {
   
    this.setState({
      bounds: null,
      center: {
        lat: 41.9, lng: -87.624
      },
      markers: [],
      refs:{}
    })
  }

render()
{

  return(
      <div>
        
        <GoogleMap onBoundsChanged={this.onBoundsChanged}  ref={this.onMapMounted} defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
        <SearchBox  controlPosition={1} onPlacesChanged={this.onPlacesChanged} ref={this.onSearchBoxMounted}>
        <input
        type="text"
        placeholder="Customized your placeholder"
        style={{
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `240px`,
          height: `32px`,
          marginTop: `27px`,
          padding: `0 12px`,
          borderRadius: `3px`,
          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses`,
        }}
      />
          </SearchBox>
        </GoogleMap>
      </div>);
} 
}  

export default compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap)(Map);
