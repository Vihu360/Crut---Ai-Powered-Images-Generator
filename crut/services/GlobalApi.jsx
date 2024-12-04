import axios from "axios";

// Check if API key is available
const STRAPI_API_KEY = process.env.EXPO_PUBLIC_StRAPI_KEY
if (!STRAPI_API_KEY) {
    console.error('STRAPI API KEY is not defined in environment variables');
}

const BASE_URL = 'http://192.168.31.52:1337/api/';

// Log configuration during setup
console.log('API Configuration:', {
    baseUrl: BASE_URL,
    hasApiKey: !!STRAPI_API_KEY,
    apiKeyLength: STRAPI_API_KEY?.length
});

const axiosClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Authorization': `Bearer ${STRAPI_API_KEY}`,
        'Content-Type': 'application/json'
    }
});

// Request interceptor
axiosClient.interceptors.request.use(
    config => {
        // Verify authorization header is set correctly
        console.log('Request Headers:', config.headers);
        return config;
    },
    error => {
        console.error('Request Error:', error);
        return Promise.reject(error);
    }
);

// Response interceptor
axiosClient.interceptors.response.use(
    response => response,
    error => {
        console.error('Response Error Details:', {
            status: error.response?.status,
            message: error.response?.data?.error?.message,
            details: error.response?.data?.error?.details
        });
        return Promise.reject(error);
    }
);

const getUserInformation = async (email) => {
    if (!STRAPI_API_KEY) {
        throw new Error('Strapi API key is not configured');
    }

    if (!email) {
        throw new Error('Email is required');
    }

    try {
        const response = await axiosClient.get('user-lists', {
            params: {
                'filters[userEmail][$eq]': email
            }
        });
        return response.data;
    } catch (error) {
        if (error.response?.status === 401) {
            console.error('Authentication failed. Please check your API key.');
        }
        throw error;
    }
};

const createNewUser = async (data) => {

    if (!STRAPI_API_KEY) {
        throw new Error('Strapi API key is not configured');
    }

    try {

        const response = await axiosClient.post('user-lists', { data: data });
        return response.data;
        
    } catch (error) {

        console.error('Create User Error:', {
            status: error.response?.status,
            message: error.response?.data?.error?.message,
            details: error.response?.data?.error?.details
        });
        throw error;
        
    }

}

const getFeaturedList = async () => {

    if (!STRAPI_API_KEY) {
        throw new Error('Strapi API key is not configured');
    }

    try {

        const response = await axiosClient.get('/ai-models?filters[isFeatured][$eq]=true');
        console.log(response.data)
        return response.data;
        
    } catch (error) {
        console.error(error);
        throw error;
    }

}

const getAvatarList = async () => {

    if (!STRAPI_API_KEY) {
        throw new Error('Strapi API key is not configured');
    }

    try {

        const response = await axiosClient.get('/ai-models?filters[avatar][$eq]=true');
        return response.data;
        
    }
    catch (error) {
        console.error(error);
        throw error;
    }

}


export default {
    getUserInformation,
    createNewUser,
    getFeaturedList,
    getAvatarList
};