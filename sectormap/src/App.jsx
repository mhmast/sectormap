import Map from './Components/Map/Map';
import Button from './Components/Atoms/Button'
import React  from 'react';
import {connect } from 'react-redux';
import {test} from './Sagas/MapsSaga';
const App=(props)=>{

    return (
    <div>

    <Map/>
    <Button text="click me" onClick={
        ()=>test('holiemolie')}/>
    </div>);
}; 

const mapStateToProps =(state)=>{
    return {
        mapData:state.mapData
    }
}

export default connect(mapStateToProps)(App);