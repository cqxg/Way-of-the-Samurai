import axios from 'axios';

import { MAIN_URL } from '../utils/url-utils';

const instance = axios.create(
    {
        withCredentials: true,
        baseURL: MAIN_URL,
    }
);

const getUsers = (pageNumber, pageSize) => {
    return instance.get(`users?page=${pageNumber}&count=${pageSize}`).then((response) => response.data);
};

export default getUsers;
