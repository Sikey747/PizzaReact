import axios from 'axios';

const options = {
  method: 'get',
  url: `https://65424bfdf0b8287df1ffdd19.mockapi.io/tProd/test/`,
  headers: { 'content-type': 'application/json' },
};

export const getAllPizza = async (
  filter = 1000,
  sort?: string,
  page = 1,
  limit = 4
) => {
  try {
    if (filter !== 1000) {
      const { data } = await axios({
        method: options.method,
        url: options.url,
        headers: options.headers,
        params: {
          category: filter,
          sortBy: sort,
          limit,
          page: page + 1,
        },
      });
      return data;
    }
    const { data } = await axios({
      method: options.method,
      url: options.url,
      headers: options.headers,
      params: {
        sortBy: sort,
        limit,
        page: page + 1,
      },
    });
    return data;
  } catch (error) {
    throw new Error('Sorry Server Has Error Please Tray Again');
  }
};

export const getCountPizzas = async () => {
  try {
    const { data } = await axios(options);
    return data;
  } catch (error: any) {
    throw new Error('Sorry Server Has Error Please Tray Again');
  }
};
export const getIdPizza = async (id: number) => {
  try {
    const { data } = await axios({
      method: options.method,
      url: options.url,
      headers: options.headers,
      params: { id },
    });
    return data;
  } catch (error: any) {
    throw new Error('Sorry Server Has Error Please Tray Again');
  }
};
