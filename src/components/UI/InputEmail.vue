<script setup>
import { useAuth } from '@/stores/auth';

const Auth = useAuth()

</script>

<template>
    <div class="container-input">

        <div class="entryarea">
            <input type="email" v-model="Auth.user.email" required>
            <div class="labelline" :class="Auth.user.email === '' ? '' : 'up' ">Email</div>
        </div>
    </div>
</template>


<style  scoped>
/* .container-input{
    display: flex;
    align-items: center;
    justify-content: center;
} */
.entryarea{
    position: relative;
    height: 80px;

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
input:valid + .labelline,
.labelline.up

{
    color: #10a37f;
    height: 30px;
    line-height: 30px;
    padding: 0 12px;
    transform: translate(-15px,-16px) scale(0.88);
    z-index: 1111;
}

</style>