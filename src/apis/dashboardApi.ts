import request from '@/utils/request';

export function getDashboardData() {
    return request({
        url: '/dashboard_data.json',
        method: 'get'
    })
}