import axios from 'axios';

export function getComments(){
    return dispatch => {
        axios.get('/hiking').then(response => {
            dispatch({
                type: "GET_COMMENTS",
                comment: response.data
            })
        })
    }
}
  
export function addComment(newComment){
    return dispatch => {
        axios.post('/hiking', newComment).then(response => {
            dispatch(getComments())
        }).catch(err => {
        console.log(err)
        })
    }
}
const initialState = []


export default function comments(state = initialState, action){
switch(action.type) {
    case "GET_COMMENTS":
    return action.comment
    default:
    return state
}
}