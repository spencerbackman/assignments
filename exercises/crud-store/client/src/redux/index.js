import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import thunk from 'redux-thunk'

export const getInventory = () => {
    return dispatch => {
        axios.get('/inventory').then(response => {
            dispatch({
                type: "GET_INVENTORY",
                item: response.data
            })
        })
    }
}

export const addInventory = newInventory => {
    return dispatch => {
        axios.post('/inventory', newInventory).then(response => {
            dispatch(getInventory())
        }).catch(err => {
            console.log(err)
        })
    }
}

export const deleteInventory = id => {
    return dispatch => {
        axios.delete(`/inventory/${id}`).then(response => {
            dispatch(getInventory())
        }).catch(err => {
            console.log(err)
        })
    }
}

export const editInventory = (id, newTodo) => {
    return dispatch => {
        axios.put(`/inventory/${id}`).then(response => {
            dispatch(getInventory())
        }).catch(err => {
            console.log(err)
        })
    }
}

const reducer = (state = [], action) => {
    switch (action.type) {
        case "GET_INVENTORY":
            return action.item
        default: 
            return state
    }
}

export default createStore(reducer, applyMiddleware(thunk))