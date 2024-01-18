<script setup>
import { useAuth } from '@/stores/auth';
import {ref} from 'vue';
const Auth = useAuth()
const eye = ref(true)

const toglePwd = ()=>{
    eye.value = !eye.value
}

</script>

<template>
    <div class="container-input">

        <div class="entryarea"> 
            
            <input :type=" eye ? 'password' : 'text'" v-model="Auth.user.password" required>
            <div class="labelline">Password</div>
            <button class="show" @click="toglePwd" type="button">
                <img v-if="eye" src="../../assets/eye.svg" alt="" srcset="">
                <img v-else src="../../assets/eye-closed.svg" alt="" srcset="">
            </button>
        </div>
    </div>
</template>


<style  scoped>
.show{
    display: flex;

    align-items: center;
    justify-content: center;
    width: 2.6em;
    border-radius: 0px 5px 5px 0px;
    height: 3.5em;
    cursor: pointer;
    float: right;
    z-index: 1112;  
    position: relative;
    transition: all 0.2s ease;
    border: none;
    background: transparent;
}
.show:hover{
    background: #E5E5E5;
}
.show:active{
    background: #DDF0F7;
}
.container-input{
    margin-bottom: 1em;
    height: 100%;
    
}
.entryarea{
    height: 100%;
    position: relative;
    line-height: 50px;
    
}
input{
    position: absolute;
    width: 100%;
    outline: none;
    font-size: 1em;
    padding: 0 15px;
    line-height: 8px;
    border-radius: 5px;
    border: 1px solid #C2C8D0;
    background: transparent;
    transition: 0.1s ease;
    z-index: 1111;
    height: 3em;
}

.labelline{
    position: absolute;
    font-size: 1.1em; 
    color: #6F7790;;
    padding: 0 1px;

    margin: 0 15px;
    background-color:white;
    transition: 0.2s ease;
}

input:focus,
input:valid{
    /* color: ;\ */
    border: 1px solid #10a37f ;
}
input:focus + .labelline,
input:valid + .labelline{
    color: #10a37f;
    height: 30px;
    line-height: 30px;
    padding: 0 12px;
    transform: translate(-15px,-16px) scale(0.88);
    z-index: 1111;
}
.labelline.up{
    transform: translate(-15px,-16px) scale(0.88);

}
</style>