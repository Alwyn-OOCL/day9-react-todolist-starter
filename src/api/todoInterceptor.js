import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8080/todo",
})
instance.interceptors.request.use(
    (config) => {
        config.headers['Access-Control-Allow-Origin'] = '*';
        config.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
        config.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization';
        config.headers['Access-Control-Allow-Credentials'] = 'true';
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 404) {
            window.location.href = "/404";
        }
        if (error.response && error.response.status === 500) {
            window.location.href = "/500";
        }
        return Promise.reject(error);
    }
);

export default instance;