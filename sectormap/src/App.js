import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {withScriptjs,
  withGoogleMap,
  GoogleMap} from 'react-google-maps';
  import { compose, withProps } from "recompose";

const App =compose(
  withProps({
    /**
     * Note: create and replace your own key in the Google console.
     * https://console.developers.google.com/apis/dashboard
     * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
     */
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBHWQpnkNlLKqzXptPTJMW7HxG-5RwxFcU&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height:'800px', width:'75%'}} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap)(props=>(
  
  
      <div>
        <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}/>
      </div>
  
  ));

export default App;
