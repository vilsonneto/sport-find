import axios from "axios";

const api = axios.create({ baseURL: "https://sport-find-fakeapi.onrender.com" });

export default api;
