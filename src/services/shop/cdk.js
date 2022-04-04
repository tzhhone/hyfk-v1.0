import { CDKLIST,DELCDK,GETIDCDK,ADDCDK,EDITCDK,GETCDKLABEL } from '@/services/api'
import { request, METHOD } from '@/utils/request'
//获取分类列表
export async function getList(page, limit, query) {
    return request(CDKLIST, METHOD.GET, { 
        page, 
        limit, 
        query 
    })
}

//删除分类
export async function del(id) {

    return request(DELCDK, METHOD.POST, { 
        id 
    })
}
//通过id获取分类
export async function get(id) {

    return request(GETIDCDK, METHOD.POST, { 
        id 
    })
}


//添加分类
export async function add(data) {

    return request(ADDCDK, METHOD.JSON, { 
        data
    })
}
//修改分类
export async function edit(data) {
    return request(EDITCDK, METHOD.JSON, { 
        data
    })
}

//获取分类标签
export async function getLabel() {
    return request(GETCDKLABEL, METHOD.GET, { 
    })
}
export default {
    get,
    del,
    getList,
    add,
    edit,
    getLabel,
}