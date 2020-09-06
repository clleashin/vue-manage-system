import request from '../utils/request';

export function fetchData(query) {
    return request({
        url: '/transactions/',
        method: 'get',
        params: query
    });
};

//export const addList = (data) => {
//    return request({
//      url: '/transactions/',
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