import ReqRes from "./Repository";

const resource = '/login';

export default {
    post(payload) {
        return ReqRes.post(`${resource}`, payload)
    }
}
