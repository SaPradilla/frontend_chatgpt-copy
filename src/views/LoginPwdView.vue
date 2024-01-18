<script setup>
import InputEmail from '@/components/UI/InputEmail.vue'
import InputPwd from '@/components/UI/inputPwd.vue'
import TitleRegister from '@/components/UI/TitleRegister.vue';
import ButtonForm from '@/components/UI/ButtonForm.vue'
import { RouterLink, useRouter } from 'vue-router';
import { useAuth } from '@/stores/auth';
import {ref,computed,onMounted} from 'vue';

const router = useRouter()
const Auth = useAuth()

const lengthPwd = computed(()=>{
    return Auth.user.password.length >= 12 ? true : false
})
const backEditEmail = ()=>{
    router.push({name:'login'})
}
onMounted(()=>{
    if(Auth.user.email === '') backEditEmail()
})
</script>

<template>
    <div class="container-singup">
        <div class="container">

            <div class="icon">
                <img src="../assets/openai-logomark.png" alt="openaiLogo">
            </div>

            <div class="content">

                <div class="container-form">
                    <!-- <TitleRegister /> -->
                    <h1>Enter your password</h1>
                    <div class="form">
                        <form @submit.prevent="Auth.login">

                            <!-- <InputEmail /> -->
                            <div class="email">
                                {{ Auth.user.email }}
                                <p id='edit' @click="backEditEmail">Editar</p>
                            </div>
                            
                            <InputPwd />
                            <ButtonForm>Continue</ButtonForm>
                            <p id="forgot"> Forgot your password?</p>
                        </form>
                        <p id="already-account">Already have an account? <span id="singin">Sign in</span></p>
                    </div>
                </div>

            </div>
            <div class="footer">
                <p>Terms of use<span id="footer"> | </span> Privacy policy</p>
            </div>
        </div>
    </div>
</template>


<style scoped>

.email{
    border: 1px solid #C2C8D0;
    height: 3em;
    border-radius: 5px;
    margin-bottom: 20px;
    color: black;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
p#edit{
    font-size: 1.1em;
    color: #10A37F;
    cursor: pointer;
    font-weight: 500;
}

p#forgot{
    color: #10A37F;
    cursor: pointer;
}
.form {
    margin-top: 2em;
}
p#already-account{
    text-align: center;

}
form {

    display: flex;
    flex-direction: column;
}


h1 {
    text-align: center;
}

p {
    font-size: .8em;
}

span#singin {
    color: #10A37F;
    cursor: pointer;
}

.container-singup {
    background-color: white;
    height: 100vh;
    min-height: 100vh;
}

.container-form {
    /* width: 60%; */
    /* height: 100%; */
}

.container {
    height: 100vh;
    display: flex;
    width: 100%;
    /* margin: 0 auto; */
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    /* gap: 20%; */
    position: relative;
}

.icon {
    /* position: absolute; */
    /* top: 0; */
    /* right: calc(50%); */
    margin-top: 20px;
}

.icon img {
    width: 30px;
}

.footer {
    /* 
  bottom: 0;
  position: absolute; */

}

.footer p {
    color: #10A37F;
    font-size: .8em;
    white-space: 100px;
    /* margin-bottom: 20px; */
    text-align: center;


}

span#footer {
    color: black;

}
</style>