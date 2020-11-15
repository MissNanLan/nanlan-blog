import axios from 'axios';
import { fromJS } from 'immutable';
import * as constants from './constants';

const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10),
  page: 1
});

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: constants.SEARCH_BlUR
});

export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER
});

export const moueLeave = () => ({
  type: constants.MOUSE_LEAVE
});

export const pageChange = (page) => ({
  type: constants.PAGE_CHANGE,
  page
});

export const getList = () => {
  return (dispatch) => {
    axios
      .get('/api/getList.json')
      .then((res) => {
        dispatch(changeList(res.data.data));
      })
      .catch(() => {
        console.log('error');
      });
  };
};
