import request from '@/utils/request';

export function getDashboardData() {
    return request({
        // url: '/dashboard_data.json',
        url: '/dashboard/data',
        method: 'get'
    })
}


export function getAlterData(){
    return request({
        url: '/dashboard/alerts/query',
        method: 'get'
    })
}

export function getCustormData(customer_id) {
    return request({
       url:  `/dashboard/customer/${customer_id}`,
       method: 'get'
    })
}

export function getWorkOrderData(work_order_id) {
    return request({
        url: `/dashboard/work_order/${work_order_id}`,
        method: 'get'
    })
}
