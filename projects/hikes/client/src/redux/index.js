import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';

export const getComments = () => {
  return dispatch => {
    axios.get('/hiking').then(response => {
      dispatch({
        type: "GET_COMMENTS",
        comments: response.data
      })
    })
  }
}

export const getTrails = () => {

  return dispatch => {
    axios.get('/hiking/trail_ids').then(response => {
      dispatch({
        type: "GET_TRAILS",
        trails: response.data
      })
    })
  }
}




export const addComment = newComment => {
  return dispatch => {
    axios.post('/hiking', newComment).then(response => {
      dispatch(getComments())
    }).catch(err => {
      console.log(err)
    })
  }
}

export const deleteComment = id => {
  return dispatch => {
    axios.delete(`/hiking/${id}`).then(response => {
      dispatch(getComments())
    }).catch(err => {
      console.log(err)
    })
  }
}

const initialState = {
  places: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "GET_COMMENTS":
      return action.comments
    case "GET_TRAILS":
      return action.trails
    default:
      return state
  }
}

export default createStore(reducer, applyMiddleware(thunk))
