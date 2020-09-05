import request from '../utils/request';
import Axios from 'axios';

export const fetchData = query => {
    return request({
        url: './table.json',
        method: 'get',
        params: query
    });
};

//export const addList = (data) => {
//    return request({
//      url: './table.json',
//      method: 'post',
//      data  
//    });
//};

//export const editList = (data) => {
//    return request({
//        url: 'transactions/${data.transaction_id}',
//        method: 'put',
//       data
//    });
//};

//export const deleteList = (transaction_id) => {
//    return request({
//        url: 'transactions/${transaction_id}',
//        method: 'delete'
//    });
//};