// importation

const { LOAD_CONTACT, SUCC_CONTACT, FAIL_CONTACT, ONE_CONTACT } = require("../ActionTypes/contact");


// initialState
const initialState = {
    listContacts: [],
    errors: null,
    load: false,
    oneContact: {},
};

//pure function
const contactReducer = (state= initialState, {type, payload}) => {
    switch (type) {
        case LOAD_CONTACT: 
            return {...state, load: true};
        case SUCC_CONTACT: 
            return {...state, load: false, listContacts: payload.listContacts};
        case ONE_CONTACT:
            return {...state, oneContact: payload.listContacts, load: false};
        case FAIL_CONTACT:
            return {...state, load: false, errors:payload};
        default:
            return state;
    }
};

export default contactReducer;