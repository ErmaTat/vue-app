import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    withCredentials: true,
});

const csrfApi = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    withCredentials: true, 
});

async function getCsrfCookie() {
    await csrfApi.get('/sanctum/csrf-cookie'); 
}
// Login
export async function loginUser(email, password) {
    try {
        await getCsrfCookie(); 
        const response = await api.post('/login', { email, password });
        localStorage.setItem('token', response.data.token);
        api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        return { success: true, data: response.data };
    } catch (error) {
        let errorMessage = "An unknown error occurred. Please try again.";
        if (error.response) {
            errorMessage = error.response.data.message || errorMessage;
        } else if (error.request) {
            errorMessage = "No response from server. Check your internet connection.";
        }
        return { success: false, message: errorMessage };
    }
}
export async function RegisterUser(email, password, name,password_confirmation) {
    try {
        await getCsrfCookie(); 
        const response = await api.post('/register', { email, password, name,password_confirmation });
        localStorage.setItem('token', response.data.token);
        api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        return { success: true, data: response.data };
    } catch (error) {
        let errorMessage = "An unknown error occurred. Please try again.";
        if (error.response) {
            errorMessage = error.response.data.message || errorMessage;
        } else if (error.request) {
            errorMessage = "No response from server. Check your internet connection.";
        }
        return { success: false, message: errorMessage };
    }
}

// Get User
export async function getUser() {
    const token = localStorage.getItem('token');
    if (token !==null) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        return api.get('/user');
    }else{
        return null;
    }
   
}

// Logout
export async function logoutUser() {
    const token = localStorage.getItem('token');
    if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    await api.post('/logout');
    localStorage.removeItem('token');
}

export default api;
