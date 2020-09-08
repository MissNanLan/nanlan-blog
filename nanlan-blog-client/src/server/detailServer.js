import axios from './axios';

const star = (articleId) => {
  axios
    .post('/api/article/' + articleId + '/star', (res) => {
      if (res.status) {
        return res.data;
      }
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

const cancelStar = (articleId) => {
  axios
    .delete('/api/article/' + articleId + '/star', (res) => {
      if (res.status) {
        return res.data;
      }
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

export { star, cancelStar };
