import axios from 'axios'
import { getToken } from './cookisUtil'

//内容类型
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建axios实例
const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: 'http://example.com',
    // 超时
    timeout: 10000
})
// request拦截器
service.interceptors.request.use(config => {
    if (getToken()) {
        // 让每个请求携带自定义token 请根据实际情况自行修改,【权限认证】
        config.headers['Authorization'] = getToken()
    }
    return config
},
    error => {
        Promise.reject(error)
    }
)
// 响应拦截器
service.interceptors.response.use(res => {
    const code = res.data.status
    if (code != 200) {
        return Promise.reject('error')
    } else {
        return res.data
    }
},
    error => {
        console.log('err' + error)
        return Promise.reject(error)
    }
)

export default service
