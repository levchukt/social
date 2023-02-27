import axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "230db31f-6ca1-4297-a0e0-14ae04527023"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 6) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(responce => responce.data) 
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    
}
export const profileAPI = {
    setProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status})
    },
}
export const authAPI = {
    getAuthUserData() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe })
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}


// export const getUsers = (currentPage = 1, pageSize = 6) => {
//     return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(responce => responce.data)
// }