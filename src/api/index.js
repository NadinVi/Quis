import axios from './service';

const tests = {
  fetch: () => axios.get('/quizes').then((data) => data),
};

export { tests };
