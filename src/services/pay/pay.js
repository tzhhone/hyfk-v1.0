import { POSTPAY,GETLIST,POSTISPAY } from '@/services/api'
import { request, METHOD } from '@/utils/request'

export async function pay(id, count) {
    return request(POSTPAY, METHOD.POST, { id,count})
}

export async function getlist() {
    return request(GETLIST, METHOD.GET)
}
export async function isPay(order_id) {
    return request(POSTISPAY, METHOD.POST,{ order_id })
}

export default {
    pay,
    getlist,
    isPay
}