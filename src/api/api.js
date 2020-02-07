import axios from 'axios';

import { MAIN_URL } from '../utils/url-utils';
import { API_KEY } from '../utils/constants';

const instance = axios.create(
    {
        withCredentials: true,
        baseURL: MAIN_URL,
        headers: {
            'API-KEY': API_KEY,
          },
    }
);

const getUsers = (pageNumber, pageSize) => {
    return instance.get(`users?page=${pageNumber}&count=${pageSize}`).then((response) => response.data);
};

const getFollow = (user) => {
    return instance.post(`follow/${user.id}`, {},)
};

export default getUsers;
