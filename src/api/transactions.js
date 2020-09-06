import request from '../utils/request';

export function fetchData(query) {
    return request({
        url: '/transactions/',
        method: 'get',
        params: query
    });
};

export function addList(data) {
    return request({
      url: '/transactions/add/',
      method: 'post',
      params: data
    });
};

//export function editList(data) {
//    return request({
//        url: 'transactions/${data.transaction_id}',
//        method: 'put',
//       data
//    });
//};

//export function deleteList(transaction_id) {
//    return request({
//        url: 'transactions/${transaction_id}',
//        method: 'delete'
//    });
//};