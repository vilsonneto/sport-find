import axios from "axios";

const api = axios.create({ baseURL: "https://sport-find.herokuapp.com" });

export default api;
