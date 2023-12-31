import axios from 'axios';
import { checkIfTokenExpired } from '../helpers';
import { isAuthenticated } from './Auth';

export const getAvailableBusesOfOwner = () => {
    // checkIfTokenExpired(isAuthenticated().token);
    return axios.get(process.env.REACT_APP_API_URL + '/bus/owner-bus-available');
}
export const getAllAvailableBuses = () => axios.get(process.env.REACT_APP_API_URL + '/bus/all-bus-available');

export const getUnavailableBusesOfOwner = () => axios.get(process.env.REACT_APP_API_URL + '/bus/owner-bus-unavailable');
export const getAllUnavailableBuses = () => axios.get(process.env.REACT_APP_API_URL + '/bus/all-bus-unavailable');

export const addNewBus = body => axios.post(process.env.REACT_APP_API_URL + '/bus', body);

export const getBusBySlug = slug => axios.get(process.env.REACT_APP_API_URL + '/bus/' + slug);

export const removeBus = slug => axios.delete(process.env.REACT_APP_API_URL + '/bus/' + slug);

export const updateBus = (slug, body) => axios.put(process.env.REACT_APP_API_URL + '/bus/' + slug, body);

// axios.post('/bus', body, { onUploadProgress: progressEvent => console.log(progressEvent.loaded) });
