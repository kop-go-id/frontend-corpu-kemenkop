import _ from 'lodash';
import { callApi, getAPIEndpoint } from './endpoint';
import { token } from './storage';

const fetchData = async (path) => {
  try {
    const endpoint = getAPIEndpoint(path, 'GET');
    const response = await callApi(endpoint);
    return response?.data;
  } catch (err) {
    console.error(`Failed to fetch data`);
    throw err;
  }
};

const fetchDataWithAuth = async (path) => {
  try {
    const endpoint = getAPIEndpoint(path, 'GET', {
      Authorization: token(),
    });

    const response = await callApi(endpoint);
    return response?.data;
  } catch (err) {
    console.error(`Failed to fetch data`);
    throw err;
  }
};

const fetchDataWithSearch = async (path, filtering) => {
  const { page, pageSize, search = '' } = filtering;

  let query = `page=${page}&page_size=${pageSize}`;

  if (search) {
    query += `&search=${search}`;
  }

  // const params = new URLSearchParams();

  // if (filtering?.page !== undefined) params.append('page', filtering?.page);
  // if (filtering?.pageSize !== undefined) params.append('page_size', filtering?.pageSize);
  // if (filtering?.search) params.append('search', filtering?.search);

  // const query = params.toString();

  // const endpoint = getAPIEndpoint(`${path}${query ? `?${query}` : ''}`, 'GET', {
  //   Authorization: token(),
  // })

  const endpoint = getAPIEndpoint(`${path}?${query}`, 'GET', {
    Authorization: token(),
  });

  try {
    const response = await callApi(endpoint);
    return response;
  } catch (err) {
    console.error(`Failed to fetch data with search`, err);
    throw new Error("Failed to fetch data with search") ;
  }
};

export { fetchData, fetchDataWithAuth, fetchDataWithSearch };
