import axios from 'axios'

export const sendImageRequest = (params: any) => {
    return axios.post('api/upload', params)
}

export const deleteImg = (params: any) => {
    return axios.delete(`api/delete/${params}`)
}