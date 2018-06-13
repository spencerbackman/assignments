import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import thunk from 'redux-thunk'

export const getBounties = () => {
    return dispatch => {
        axios.get('/bounty').then(response => {
            dispatch({
                type: "GET_BOUNTIES",
                bounties: response.data
            })
        })
    }
}

// export const addBounty = newBounty => {
//     return dispatch => {
//         axios.post('/bounty', newBounty).then(response => {
//             dispatch(getBounties())
//         }).catch(err => {
//             console.log(err)
//         })
//     }
// }

// export const deleteBounty = id => {
//     return dispatch => {
//         axios.delete(`/bounty/${id}`).then(response => {
//             dispatch(getBounties())
//         }).catch(err => {
//             console.log(err)
//         })
//     }
// }

// export const editBounty = (id, newTodo) => {
//     return dispatch => {
//         axios.put(`/bounty/${id}`).then(response => {
//             dispatch(getBounties())
//         }).catch(err => {
//             console.log(err)
//         })
//     }
// }

const reducer = (state = [], action) => {
    switch(action.type) {
        case "GET_BOUNTIES":
            return action.bounties
        default: 
            return state
    }
}

export default createStore(reducer, applyMiddleware(thunk))