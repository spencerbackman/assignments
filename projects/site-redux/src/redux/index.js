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
    },
    bookData: {
      name: '',
      authors: '',
      numberOfPages: '',
      publisher: ''
    },
    jokeData: {
      setup: '',
      punchline: ''
    },
    dadJokes: {
      joke: ''
    },
    ronQuotes: '',
    weatherData: {
      results: {
      sunrise: '',
      sunset: '',
      solar_noon: '',
      day_length: ''
    }
    }
}

export const getWeather = () => {
  return dispatch => {
    axios.get('https://vschool-cors.herokuapp.com?url=https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=2018-06-01').then(response => {
      dispatch({
        type: 'GET_WEATHER',
        weatherData: response.data
      })
    })
  }
}

export const getRonQuotes = () => {
  return dispatch => {
    axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes').then(response => {
      dispatch({
        type: 'GET_RON_QUOTES',
        ronQuotes: response.data
      })
    })
  }
}


export const getDadJokes = () => {
  const header = {Accept: 'application/json'};
  return dispatch => {
    axios.get('https://icanhazdadjoke.com/', {headers: header}).then(response => {
      dispatch({
        type: 'GET_DAD_JOKES',
        dadJokes: response.data
      })
    })
  }
}

export const getJokeData = () => {
  return dispatch => {
    axios.get('https://vschool-cors.herokuapp.com?url=https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke').then(response => {
      dispatch({
        type: 'GET_JOKE_DATA',
        jokeData: response.data
      })
    })
  }
}

export const getBookData = () => {
  return dispatch => {
    axios.get('https://vschool-cors.herokuapp.com?url=https://www.anapioficeandfire.com/api/books/1').then(response => {
      dispatch({
        type: 'GET_BOOK_DATA',
        bookData: response.data
      })
    })
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
                dogData: state.dogData,
                bookData: state.bookData,
                jokeData: state.jokeData,
                dadJokes: state.dadJokes,
                ronQuotes: state.ronQuotes,
                weatherData: state.weatherData
            }
        case 'GET_NEW_DATA':
            return {
                houseData: action.houseData,
                data: state.data,
                dogData: state.dogData,
                bookData: state.bookData,
                jokeData: state.jokeData,
                dadJokes: state.dadJokes,
                ronQuotes: state.ronQuotes,
                weatherData: state.weatherData
            }
        case 'GET_DOG_DATA':
            return {
                dogData: action.dogData,
                houseData: state.houseData,
                data: state.data,
                bookData: state.bookData,
                jokeData: state.jokeData,
                dadJokes: state.dadJokes,
                ronQuotes: state.ronQuotes,
                weatherData: state.weatherData
            }
      case 'GET_BOOK_DATA':
           return {
             bookData: action.bookData,
             dogData: state.dogData,
             houseData: state.houseData,
             data: state.data,
             jokeData: state.jokeData,
             dadJokes: state.dadJokes,
             ronQuotes: state.ronQuotes,
             weatherData: state.weatherData
           }
      case 'GET_JOKE_DATA':
          return {
            jokeData: action.jokeData,
            bookData: state.bookData,
            dogData: state.dogData,
            houseData: state.houseData,
            data: state.data,
            dadJokes: state.dadJokes,
            ronQuotes: state.ronQuotes,
            weatherData: state.weatherData
          }
      case 'GET_DAD_JOKES':
          return {
            dadJokes: action.dadJokes,
            bookData: state.bookData,
            dogData: state.dogData,
            houseData: state.houseData,
            data: state.data,
            jokeData: state.jokeData,
            ronQuotes: state.ronQuotes,
            weatherData: state.weatherData
          }
      case 'GET_RON_QUOTES':
          return {
            ronQuotes: action.ronQuotes,
            dadJokes: state.dadJokes,
            bookData: state.bookData,
            dogData: state.dogData,
            houseData: state.houseData,
            data: state.data,
            jokeData: state.jokeData,
            weatherData: state.weatherData
          }
      case 'GET_WEATHER':
          return {
            weatherData: action.weatherData,
            ronQuotes: state.ronQuotes,
            dadJokes: state.dadJokes,
            bookData: state.bookData,
            dogData: state.dogData,
            houseData: state.houseData,
            data: state.data,
            jokeData: state.jokeData
          }
            default:
            return state
    }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&
       window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))

export default store;
