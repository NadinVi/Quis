import axios from 'axios';

export default axios.create({
  baseURL: 'https://63fd4162677c4158731baf01.mockapi.io',
  headers: { 'Content-Type': 'application/json' },
});