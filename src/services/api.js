import axios from 'axios';

const baseUrl = "http://desafio.nexaas.com/api/v1/customers";
// const config = {
//   headers: { "Access-Control-Allow-Origin": "*" },
//   withCredentials: true
// };

const api = () => {
  return {
    get: () => axios.get(baseUrl)
  };
}

export default api();