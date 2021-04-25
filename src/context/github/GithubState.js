import React, { useReducer } from 'react';
import axios from 'axios';

import GithubContext from './GithubContext'
import GithubReducer from './GithubReducer'

import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS,
    SET_ALERT,
    REMOVE_ALERT
} from '../Types'

let githubClientId;
let githubClientSecret;

if(process.env.NODE_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false,
        alert : null
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    //search All Users
    const searchUser = async (text) => {
        setLoading()
    
        const res = await axios.get(
          `https://api.github.com/search/users?q=${text}
          &client_id=${githubClientId}
          &secret_id=${githubClientSecret}`);
    
        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        })
      }

    //get single user
    const getSingleUser = async (username) => {
        setLoading(true)
    
        const res = await axios.get(
          `https://api.github.com/users/${username}?
          client_id=${githubClientId}
          &secret_id=${githubClientSecret}`);
            
          dispatch({ 
              type: GET_USER,
              payload: res.data
        })
      }
    

    //Get single user repos
    const getSingleUserRepos = async (username) => {
        setLoading();
    
        const res = await axios.get(
          `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&
          client_id=${githubClientId}
          &secret_id=${githubClientSecret}`);
    
          dispatch({
            type: GET_REPOS,
            payload: res.data
          })
      }
    

    //clear users
    const clearUsers = () => dispatch( { type: CLEAR_USERS });
    
    //set loading
    const setLoading = () => dispatch({ type: SET_LOADING })
    
    //set alert
    const showAlert = (message, type) => {
      //console.log(message);

      dispatch({
          type: SET_ALERT,
          payload: {
              msg: message,
              type: type
          }
      })
    }
  const removeAlert = () => {
      dispatch({
          type: REMOVE_ALERT
      })
  }  

    return <GithubContext.Provider
    value = { {
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        alert: state.alert,
        searchUser,
        clearUsers,
        getSingleUser,
        getSingleUserRepos,
        showAlert,
        removeAlert
    }}
    >
     {props.children}   
    </GithubContext.Provider>
}

export default GithubState

