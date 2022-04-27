import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = '58c18ed3';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        const query = `/?apikey=${key}&s=${title}`;
        return axiosInstance.get<{}, TestType<ResponseType>>(query);
        //return axiosInstance.get(query).then(res => res.data);
    },
    searchFilmsByType: (title: string, type: string) => {
        const query = `/?apikey=${key}&s=${title}&type=${type}`;
        axiosInstance.get<{}, TestType<ResponseType>>(query)
            .then((res) => {
                return res.data
            })
    },
    getPage: (title: string, page: number) => {
        const query = `/?apikey=${key}&s=${title}&page=${page}`;
        return axiosInstance.get<{}, TestType<ResponseType>>(query)

    }
};

type TestType<T> = {
    data: T
}

type ResponseType = {
    Search: Array<any>;
    Error: string;
    Response: string;
}


export default API;
