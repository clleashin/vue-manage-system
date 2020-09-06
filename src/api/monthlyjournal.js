import request from '../utils/request';

export const fetchMonthlyData = monthlyquery => {
    return request({
        url: '/monthly_analysis/',
        method: 'get',
        params: monthlyquery
    });
};