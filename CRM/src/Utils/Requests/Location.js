import axios from "axios";

export const getAllLocations = () => axios.get(process.env.REACT_APP_API_URL + "/locations");
export const getALocation = id => axios.get(process.env.REACT_APP_API_URL + `/locations/${id}`);
export const updateLocation = (id, body) => axios.put(process.env.REACT_APP_API_URL + `/locations/${id}`, body);
export const removeLocation = id => axios.delete(process.env.REACT_APP_API_URL + `/locations/${id}`);
export const addNewLocation = body => axios.post(process.env.REACT_APP_API_URL + "/locations", body);
