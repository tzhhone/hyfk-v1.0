import { USERLIST,DELUSER,GETUID,ADDUSER,EDITUSER } from '@/services/api'
import { request, METHOD } from '@/utils/request'
//获取用户列表
export async function getList(page, limit, query) {
    return request(USERLIST, METHOD.GET, { 
        page, 
        limit, 
        query 
    })
}

//删除用户
export async function delUser(uid) {

    return request(DELUSER, METHOD.POST, { 
        uid 
    })
}
//通过uid获取用户
export async function getUid(uid) {

    return request(GETUID, METHOD.POST, { 
        uid 
    })
}


//添加用户
export async function addUser(user,passwd,_type) {

    return request(ADDUSER, METHOD.POST, { 
        user,
        passwd,
        _type,
    })
}
//修改用户
export async function editUser(data) {
    return request(EDITUSER, METHOD.JSON, { 
        data
    })
}
export default {
    getList,
    delUser,
    getUid,
    addUser,
    editUser
}