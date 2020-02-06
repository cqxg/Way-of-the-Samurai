import axios from 'axios';

import { MAIN_URL } from '../utils/url-utils';

const instance = axios.create();

const getUsers = (pageNumber, pageSize) => axios.get(`${MAIN_URL}users?page=${pageNumber}&count=${pageSize}`,
  {
    withCredentials: true,
  })
  .then((response) => response.data);

export default getUsers;
