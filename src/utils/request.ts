// 封装 axios
import axios from 'axios'

// 简单配置
const baseURL = '/' // 根据项目需要调整
const defaultTimeout = 10000

const http = axios.create({
    baseURL,
    timeout: defaultTimeout,
    headers: {
        'Content-Type': 'application/json',
    },
})

// 请求拦截：可以在此注入 token 等
http.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => Promise.reject(error)
)

// 响应拦截：统一处理错误、直接返回 data
http.interceptors.response.use(
    (response) => {
        // 如果后端有统一格式 { code, data, msg }，可以在此处理
        // 直接返回 response.data，调用端可以按需断言类型
        return response.data
    },
    (error) => {
        // 简单错误转换，可扩展为通知/跳转登录等
        if (error.response) {
            const { status, data } = error.response
            const msg = data?.message || data?.msg || `请求失败，状态码 ${status}`
            return Promise.reject(new Error(msg))
        }
        if (error.request) {
            return Promise.reject(new Error('无响应，请检查网络或接口'))
        }
        return Promise.reject(error)
    }
)


export default http
