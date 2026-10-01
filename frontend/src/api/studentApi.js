import axios from "axios";
const API_URL = "http://localhost:5000/api/libraries"; // Update the URL to match your backend endpoint
export const getAllStudents = () => axios.get(API_URL);
export const createStudent = (data) => axios.post(API_URL, data);
export const updateStudent = (id, data) =>
axios.put(`${API_URL}/${id}`, data);