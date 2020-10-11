import Axios from 'axios'

const axios = Axios.create({
    baseURL: `//${document.domain}:8080`,
    timeout: 5000
});
export default {
    login: (data) => axios({
        url: '/login',
        method: 'post',
        data
    }).then(data => data.data),
    logout: (data) => axios({
        url: '/logout',
        method: 'post',
        data
    }).then(data => data.data),
}
