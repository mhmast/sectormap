import assignIn from "lodash.assignin";
import {TEST} from "../Actions/MapActions";


const initialState = {
    testprop:"LOL"
}

const MapReducer = (state , action)=>{

    if(state === undefined)
    {
        return initialState;
    }
switch(action.type){
    case TEST:
       let returnobj = assignIn({},state,{testprop:action.text});
return returnobj;
    default:
    return state;
}
}

export default MapReducer;