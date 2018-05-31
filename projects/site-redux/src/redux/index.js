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
        founded: '',
        words: '',
        ancestralWeapons: ''
    },
    dogData: {
        url: ''
    }
}

export const getDogData = () => {
    return dispatch => {
        axios.get('https://vschool-cors.herokuapp.com?url=http://shibe.online/api/shibes?count=[1-100]&urls=[true/false]&httpsUrls=[true/false]').then(response => {
            dispatch({
                type: 'GET_DOG_DATA',
                dogData: response.data 
            })
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

const reducer = (state = initialState , action) => {
    switch(action.type) {
        case 'GET_DATA':
            return {
                data: action.data,
                houseData: state.houseData,
                dogData: state.dogData
            }
        case 'GET_NEW_DATA':
            return {
                houseData: action.houseData,
                data: state.data,
                dogData: state.dogData
            }
        case 'GET_DOG_DATA':
            return {
                dogData: action.dogData,
                houseData: state.houseData,
                data: state.data
            }
            default:
            return state
    }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store;