import { defineStore } from "pinia";
import {ref,onMounted,watch, onUpdated,computed, reactive} from 'vue'
import authService from "@/services/authService";
import { useRouter } from 'vue-router';

export const useAuth = defineStore('auth',()=>{

    const router = useRouter()

    const user = reactive({
        email:'',
        password:''
    })
    const userLogin = ref({})

    const register = ()=>{
        formatName()

        authService.registerUser(user)
        .then(res=>{
            console.log(res)

            Object.assign(user,{
                email:'',
                name:'',
                password:''
            })
            
            router.push({name:'login'})
        })
    }
    const login = ()=>{
        authService.loginUser(user)
        .then(res=>{
            console.log(res)
            localStorage.setItem('token',res.data.token)

            router.push({name:'chat'})
        })
    }
    const formatName = () => {
        user.name = user.email.match(/^[^@]+/)[0];
    }

    return{
  
        register,
        user,
        login,
        userLogin

    }
})