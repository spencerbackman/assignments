import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

const initialState = {
    data: {
        name: '',
        aliases: '',
        born: '',
        gender: '',
        playedBy: '',
        titles: ''
    },
    houseData: {
        name: '',
        region: '',
        coatOfArms: '',
        founded: ''
    }
   
}

export const getData = () => {
    return dispatch => {
        axios.get('https://vschool-cors.herokuapp.com?url=https://anapioficeandfire.com/api/characters/583').then(response => {
            dispatch({
                type: 'GET_DATA',
                data: response.data
            })
        }).catch(err => {
            console.log(err)
        })
    }
}

export const getNewData = () => {
    return dispatch => {
        axios.get('https://vschool-cors.herokuapp.com?url=https://anapioficeandfire.com/api/houses/362').then(response => {
            dispatch({
                type: 'GET_NEW_DATA',
                houseData: response.data
            })
        }).catch(err => {
            console.log(err)
        })
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DATA':
            return  {
                data: action.data
            }
        case 'GET_NEW_DATA':
            return {
                houseData: action.data
            }
        default:
            return state
    }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store;