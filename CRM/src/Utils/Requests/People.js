import axios from "axios";

export const getOwners = () => axios.get(process.env.REACT_APP_API_URL + "/owners");
export const getUsers = () => axios.get(process.env.REACT_APP_API_URL + "/users");
export const getGuests = () => axios.get(process.env.REACT_APP_API_URL + "/guests");

export const updateOwner = (id, body) => axios.put(process.env.REACT_APP_API_URL + `/owners/${id}`, body);

export const addOwner = body => {
    console.log(body)
    return axios.post(process.env.REACT_APP_API_URL + "/auth-owner/signup", body);
}