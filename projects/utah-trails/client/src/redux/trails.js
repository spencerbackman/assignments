import axios from 'axios';

export function getTrails(){
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

export default function trails(state = initialState, action){
    switch(action.type) {
      case "GET_TRAILS":
        return action.trails
      default:
        return state
    }
  }