import axios from "@/lib/axios";

export const handlerApi = (routes : string) =>{
    const response = axios.get(`/api/blog/${routes}`).then((result) => {
        return result.data
    }).catch((err) => {
        return err
    });

    return response
}


export const settingApi = () =>{
    const response = axios.get(`/api/blog/setting`).then((result) => {
        return result.data
    }).catch((err) => {
        return err
    });

    return response
}