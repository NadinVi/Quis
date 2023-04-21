import axios from './service';

const tests = {
  fetch: () => axios.get('/quizes').then((data) => data),
};

const quizz = {
  fetch: (test) => axios.get(`${test}`).then((data) => data),
};

const newTest = {
  fetch: ((body) => axios.post('/quizes', body).then((data) => data)),
};

export { tests, quizz, newTest };
