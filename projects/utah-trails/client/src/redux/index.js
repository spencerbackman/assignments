import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';

export const getComments = () => {
  return dispatch => {
    axios.get('/hiking').then(response => {
      dispatch({
        type: "GET_COMMENTS",
        comment: response.data
      })
    })
  }
}
export const addComment = (newComment) => {
  return dispatch => {
    axios.post('/hiking', newComment).then(response => {
      dispatch(getComments())
    }).catch(err => {
      console.log(err)
    })
  }
}

export const getTrails = () => {
  const header = {"X-Mashape-Key": "KiT9MoqX2cmsh2R0Fzkd5ctqjF0Ap19flmjjsnKiZ4rSLeRCfe"}
  return dispatch => {
    axios.get('https://trailapi-trailapi.p.mashape.com/?q[activities_activity_type_name_eq]=hiking&q[state_cont]=utah', {headers: header}).then(response => {
      dispatch({
        type: "GET_TRAILS",
        trails: response.data
      })
    })
  }
}

const initialState = {
  places: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "GET_TRAILS":
      return action.trails
    case "GET_COMMENTS":
      return action.comment
    default:
      return state
  }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store
