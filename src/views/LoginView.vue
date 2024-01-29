<script setup>
import InputEmail from '@/components/UI/InputEmail.vue'
import TitleRegister from '@/components/UI/TitleRegister.vue';
import ButtonForm from '@/components/UI/ButtonForm.vue'
import { useRouter } from 'vue-router';

const router = useRouter()

const redirectRegisterPwd = ()=>{
  router.push({name:'login-pwd'})
}

</script>

<template>
  <div class="container-singup">
    <div class="container">

      <div class="icon">
        <img src="../assets/openai-logomark.png" alt="openaiLogo">
      </div>

      <div class="content">

        <div class="container-form">
          <h1>Welcome back</h1>
          <div class="form">
            <form @submit.prevent="redirectRegisterPwd">
  
              <InputEmail />

              <ButtonForm>Continue</ButtonForm>
             
            </form>
            <p>Don't have an account? <span id="singin" @click="router.push({name:'register'})"> Register</span></p>
          </div>
        </div>
        <div class="others">
          <hr>
          <span id="other">O</span>
          <hr>
        </div>
        <div class="other-singup">
          <img src="../assets/google.svg" alt="">
          Continue with Google
        </div>
      </div>
      <div class="footer">
        <p>Terms of use<span id="footer"> | </span> Privacy policy</p>
      </div>
    </div>
  </div>
</template>


<style scoped>
h1{
    font-size: 2.2em;
}
.other-singup {
  display: flex;
  align-items: center;
  border: solid #9d9d9d 1px;
  padding: 20px;
  gap: 20px;
  /* width: 100%; */

  height: 60px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in;
}

.other-singup:hover {
  background-color: #cfcfcf;
}

.other-singup img {
  width: 25px;

}



.others {
  display: flex;
  margin-top: 1.5em;
  align-items: center;
  justify-content: space-around;
  /* gap: 20px; */
  margin-bottom: 20px;
  /* width: 60%; */


}

span#other {
  font-size: .8em;
}

hr {
  width: 9em;
  height: 0;
  /* margin: 0 auto; */
}

.form {
  margin-top: 2em;
}

form {

  display: flex;
  flex-direction: column;
}


h1 {
  text-align: center;
}

p {
  font-size: 0.9em;
  text-align: center;
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


}

span#footer {
color: black;

}

</style>