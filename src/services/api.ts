import axios from "axios"

export const api = axios.create({
    baseURL: "https://chatness-api.vercel.app"
})