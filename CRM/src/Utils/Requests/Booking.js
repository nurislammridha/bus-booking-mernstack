import axios from 'axios';

export const getOwnerBookings = () => axios.get(process.env.REACT_APP_API_URL + '/bookings/my');
export const getAllBookings = () => axios.get(process.env.REACT_APP_API_URL + '/bookings/all');

export const removeBooking = id => axios.delete(process.env.REACT_APP_API_URL + `/bookings/${id}`);

export const changeVerificationStatus = (bookingId, status) =>
	axios.patch(process.env.REACT_APP_API_URL + `/bookings/${bookingId}`, { verification: status });

export const postSoldSeat = (slug, seat) => axios.post(process.env.REACT_APP_API_URL + `/bookings/sold/${slug}`, { seatNumber: seat });
