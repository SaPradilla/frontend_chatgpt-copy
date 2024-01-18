import api from '../lib/axios';

export default {
    registerUser(data){
        return api.post('/user/register',data)
    },
    loginUser(data){
        return api.post('/user/login',data)
    }
}


