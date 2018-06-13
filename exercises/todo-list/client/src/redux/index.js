import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import thunk from 'redux-thunk'

export const getTodos = () => {
    return dispatch => {
        axios.get('/todo').then(response => {
            dispatch({
                type: "GET_TODOS",
                todos: response.data
            })
        })
    }
}

export const addTodo = newTodo => {
    return dispatch => {
        axios.post('/todo', newTodo).then(response => {
            dispatch(getTodos())
        }).catch(err => {
            console.log(err)
        })
    }
}

export const deleteTodo = id => {
    return dispatch => {
        axios.delete(`/todo/${id}`).then(response => {
            dispatch(getTodos())
        }).catch(err => {
            console.log(err)
        })
    }
}

export const editTodo = (id, newTodo) => {
    return dispatch => {
        axios.put(`/todo/${id}`, newTodo).then(response => {
            dispatch(getTodos())
        }).catch(err => {
            console.log(err)
        })
    }
}

const reducer = (state = [], action) => {
    switch (action.type) {
        case "GET_TODOS":
            return action.todos
        default: 
            return state
    }
}

export default createStore(reducer, applyMiddleware(thunk))