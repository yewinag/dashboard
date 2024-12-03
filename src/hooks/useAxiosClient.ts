import axios, { AxiosInstance, AxiosHeaders } from 'axios';
import queryString from 'query-string';
import { useAuth } from '../app/context/AuthContext'; // Adjust the import path as needed

const useAxiosClient = (): AxiosInstance => {
  const { token } = useAuth(); // Get the token from the context

  const axiosClient = axios.create({
    baseURL:
      process.env.NEXT_PUBLIC_API_URL ||
      'https://stg-v2.careconnectmyanmar.com',

    headers: {
      'Content-Type': 'application/json',
    },
    paramsSerializer: {
      serialize: (params) => queryString.stringify(params),
    },
  });

  axiosClient.interceptors.request.use((config) => {
    config.headers = config.headers ?? ({} as AxiosHeaders);
    if (token) {
      // @ts-ignore
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  });

  axiosClient.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error: any) => {
      console.log(error.response.status);
      if (error?.response?.status === 403) {
        console.log(error?.response?.status);
        // await store.dispatch(logout());
      } else {
        throw error.response.data;
      }
    }
  );

  return axiosClient;
};

export default useAxiosClient;
