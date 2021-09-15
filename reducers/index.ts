import  storeData  from "./reducer";
import {combineReducers} from "redux";

export const rootReducer = combineReducers({
     storeData    
     });   
 export  type RootState = ReturnType<typeof rootReducer>
