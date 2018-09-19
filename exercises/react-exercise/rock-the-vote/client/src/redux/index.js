import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import thunk from 'redux-thunk'

export const getStory = () => {
    return dispatch => {
        axios.get('/story').then(response => {
            dispatch({
                type: "GET_STORY",
                story: response.data
            })
        })
    }
}

export const addComment = (newComment, id) => {
    return dispatch => {
        axios.post(`/story/${id}/${newComment}`).then(response => {
           dispatch(getStory())
        }).catch(err => {
            console.log(err)
        })
    }
}

export const addStory = newStory => {
    return dispatch => {
        axios.post('/story', newStory).then(response => {
            dispatch(getStory())
        }).catch(err => {
            console.log(err)
        })
    }
}

export const deleteStory = id => {
    return dispatch => {
        axios.delete(`/story/${id}`).then(response => {
            dispatch(getStory())
        }).catch(err => {
            console.log(err)
        })
    }
}

export const editStory = (id, newStory) => {
    return dispatch => {
        axios.put(`/story/${id}`, newStory).then(response => {
            dispatch(getStory())
        }).catch(err => {
            console.log(err)
        })
    }
}

const reducer = (state = [], action) => {
    switch (action.type) {
        case "GET_STORY":
            return action.story
        default: 
            return state
    }
}

export default createStore(reducer, applyMiddleware(thunk))