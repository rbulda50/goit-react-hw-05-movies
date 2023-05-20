import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'e7011c858e160819547da18edbe0186b';

export async function getTrendingMovies() {
    const options = {
        params: {
            api_key: API_KEY,
        },
    };

    const response = await axios.get(`${BASE_URL}/trending/movie/day`, options);
    return response.data.results;
};

export async function getMovieById(movie_id) {
    const options = {
        params: {
            api_key: API_KEY,
        },
    };

    const response = await axios.get(`${BASE_URL}/movie/${movie_id}`, options);
    return response.data;
};

export async function getMovieCastById(movie_id) {
    const options = {
        params: {
            api_key: API_KEY,
        },
    };
    const response = await axios.get(`${BASE_URL}/movie/${movie_id}/credits`, options);
    return response.data;
};

export const getReviewsById = async (movie_id) => {
    const options = {
        params: {
            api_key: API_KEY,
        },
    };
    const response = await axios.get(`/movie/${movie_id}/reviews`, options);
    return response.data.results;
};