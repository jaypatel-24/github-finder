import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS,
    SET_ALERT,
    REMOVE_ALERT
} from '../Types'

export default (state, action) => {
    switch(action.type) {
        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case CLEAR_USERS:
            return {
                ...state,
                users: [],
                loading: false,
                alert: null
            }    
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                loading: false
            }    
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }   
        case GET_REPOS:
            return {
                ...state,
                repos: action.payload
            }    
        case SET_ALERT:
            return {
                ...state,
                loading: false,
                alert:action.payload            
            }  
        case REMOVE_ALERT:
            return {
                ...state,
                alert: null
            }         
        default: 
        return state
    }
}