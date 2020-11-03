import axios from './axios';

const star = (payload) => {
  return axios.post('/api/article/star', payload);
};

const cancelStar = (payload) => {
  return axios.delete('/api/article/' + payload.articleId + '/star');
};

export { star, cancelStar };
