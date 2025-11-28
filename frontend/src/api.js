import axios from "axios";

// Auto switch between local and production
const baseURL =
  window.location.hostname === "localhost"
    ? "http://localhost:5000/api"
    : "https://roomiconnect-fs-backend.onrender.com/api";

export default axios.create({
  baseURL,
});
