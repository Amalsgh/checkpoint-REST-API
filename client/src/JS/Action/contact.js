// IMPORTATION
import axios from 'axios'
import { FAIL_CONTACT, LOAD_CONTACT, ONE_CONTACT, SUCC_CONTACT } from "../ActionTypes/contact"


// GET ALL CONTACT
export const getContacts = () => async(dispatch) => {
    dispatch({type: LOAD_CONTACT});
    try {
        let result = await axios.get ('/api/contact/all');
        dispatch ({type: SUCC_CONTACT, payload: result.data});
    } catch (error) {
        dispatch({type: FAIL_CONTACT, payload: error.response})
        
    }
};

//ADD CONTACT
export const addContact = (newContact) => async (dispatch) => {
    try {
        await axios.post('/api/contact/add', newContact);
        dispatch(getContacts ());
    } catch (error) {
        dispatch ({type: FAIL_CONTACT, payload: error.response});
    }
};

//DELETE CONTACT
export const deleteContacts = (id) => async (dispatch) => {
    try {
        await axios.delete (`/api/contact/${id}`);
        dispatch(getContacts ());
    } catch (error) {
        dispatch ({type: FAIL_CONTACT, payload: error.response});
    }
};

// EDIT CONTACT
export const editContacts = (id, newContact) => async (dispatch) => {
    try {
        await axios.put(`/api/contact/${id}`, newContact);
        dispatch(getContacts ());
    } catch (error) {
        dispatch ({type: FAIL_CONTACT, payload: error.response});
    }
};

// GET ONE CONTACT
export const getContact = (id) => async (dispatch) => {
    dispatch({type: LOAD_CONTACT})
    try {
        let result = await axios.get(`/api/contact/${id}`);
        dispatch({type: ONE_CONTACT, payload: result.data});
    } catch (error) {
        dispatch ({type: FAIL_CONTACT, payload: error.response});
    }
};

