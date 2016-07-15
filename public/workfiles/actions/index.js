import axios from 'axios';

export const ADD_FILTER = 'ADD_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';
export const SEARCH_LOCATION = 'SEARCH_LOCATION';
export const UPDATE_LOC_SEARCH = 'UPDATE_LOC_SEARCH';

const ROOT_URL = 'localhost:8080';
const GMAP_URL = 'gmapsapiroot';

/*grabs landings data from server*/
export function fetchLandings () {
  const request = axios.get(`${ROOT_URL}/landings`);

  return {
    type: ADD_FILTER,
    payload: request
  };
}
/*searches for location, will move center of google map to top search result*/
export function searchLocaction (search) {
  const request = axios.get(`${GMAP_URL}/${search}`);

  return {
    type: SEARCH_LOCATION,
    payload: request
  };
}
/*takes action type as arg, can be reused for all input bars by importing type to component*/
export function updateInput(type, input) {
  return {
    type: type,
    payload: input
  }
}