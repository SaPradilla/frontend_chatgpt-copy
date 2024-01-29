import { defineStore } from "pinia";
import {ref,onMounted,watch, onUpdated,computed, reactive} from 'vue'
import authService from "@/services/authService";
import { useRouter } from 'vue-router';

export const useAuth = defineStore('auth',()=>{

    onMounted(()=>{
        obtenerToken()
    })
    
    const router = useRouter()

    const user = reactive({
        email:'',
        password:''
    })

    const userLogin = ref(null)
    const token = ref(null)


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

    const obtenerToken = ()=>{
        if(localStorage.getItem('token')){
            token.value = localStorage.getItem('token')
            extraerPayload(token.value)
        }
        return
    }


    // const obtenerUserLogin = ()=>{
    //     if(localStorage.getItem('user')){
    //         userLogin.value = localStorage.getItem('user')
    //     }
    //     return
    // }


    const extraerPayload = (token)=>{
        // Divide el token en partes
        const parts = token.split('.');
        // Decodifica el payload
        const decodedPayload = atob(parts[1]);
        userLogin.value = JSON.parse(decodedPayload);
    }

    
    return{
  
        register,
        user,
        login,
        userLogin,
        // obtenerUserLogin
        obtenerToken,
        extraerPayload,
    }
})