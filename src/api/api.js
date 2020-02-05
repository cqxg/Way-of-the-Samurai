import axios from 'axios';

const getUsers = () => {
    return axios.get(`${MAIN_URL}users?page=${pageNumber}&count=${pageSize}`, {
        withCredentials: true,
    })
};

export default getUsers;