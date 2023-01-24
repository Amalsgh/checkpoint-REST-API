// importation
import {combineReducers} from 'redux'
import contactReducer from './contact'


// create rootReducer
const rootReducer = combineReducers ({contactReducer})

export default rootReducer;  