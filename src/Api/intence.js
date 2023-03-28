import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_VIDEO_BASE_URL,
    headers: {
        "Content-Type": "application/json",
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
    }
})

const searchInstance = axios.create({
    baseURL: process.env.REACT_APP_SEARCH_BASE_URL,
    headers: {
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        "Content-Type": "application/json"
    }
})


export { instance, searchInstance }
