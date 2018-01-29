import {combineReducers} from "redux";
import MapsReducer from "./MapsReducer";

const IndexReducer = combineReducers({mapsData:MapsReducer});

export default IndexReducer;