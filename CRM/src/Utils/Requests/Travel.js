import axios from "axios";

export const getAllTravels = () => axios.get(process.env.REACT_APP_API_URL + "/travels");
export const getATravel = id => axios.get(process.env.REACT_APP_API_URL + `/travels/${id}`);
export const updateTravel = (id, body) => axios.put(process.env.REACT_APP_API_URL + `/travels/${id}`, body);
export const removeTravel = id => axios.delete(process.env.REACT_APP_API_URL + `/travels/${id}`);
export const addNewTravel = body => axios.post(process.env.REACT_APP_API_URL + "/travels", body);
