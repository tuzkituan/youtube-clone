import axios from 'axios';

const create = () => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const YOUTUBE_KEY = process.env.NEXT_PUBLIC_YOUTUBE_KEY;

  try {
    return axios.create({
      baseURL: BASE_URL,
      headers: {},
      params: {
        type: 'video',
        maxResults: 12,
        key: YOUTUBE_KEY,
        part: 'snippet,id',
      },
    });
  } catch (error) {
    console.log('🚀  ~ error', error);
    return axios.create({
      baseURL: BASE_URL,
    });
  }
};

const checkError = (error: any) => {
  if (error?.response?.data) {
    console.log('🚀  ~ error?.response?.data', error?.response?.data);
    // toast(error.response.data.message)
  }
};

const callAPI = {
  get: async (route: string) => {
    try {
      const client = create();
      const { data } = await client.get(route);
      return data;
    } catch (error: any) {
      checkError(error);
    }
  },
  post: async (route: string, body: {}) => {
    try {
      const client = create();
      const { data } = await client.post(route, body);
      return data;
    } catch (error: any) {
      checkError(error);
    }
  },
  put: async (route: string, body: {}) => {
    try {
      const client = create();
      const { data } = await client.put(route, body);
      return data;
    } catch (error: any) {
      checkError(error);
    }
  },
  patch: async (route: string, body: {}) => {
    try {
      const client = create();
      const { data } = await client.patch(route, body);
      return data;
    } catch (error: any) {
      checkError(error);
    }
  },
  delete: async (route: string) => {
    try {
      const client = create();
      const { data } = await client.delete(route);
      return data;
    } catch (error: any) {
      checkError(error);
    }
  },
};

export default callAPI;
