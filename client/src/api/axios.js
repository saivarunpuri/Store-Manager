// src/api/axios.js
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api", // Change this to your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
