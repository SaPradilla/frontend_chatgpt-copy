<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()

const redirectLogin = ()=>{
    router.push({name:'login'})
}

const redirectSingUp = ()=>{
    router.push({name:'register'})
}
</script>

<template>
    <div class="container-home">
        <div class="presentation">
            <div class="tag">
                <p>ChatGayPT</p>
                <div></div>
            </div>
            <div class="description">
                <h2>Write a text</h2>
                <p>Able to process and generate natural language text to perform tasks such as answering questions, maintaining conversations and generating coherent textual content.</p>
            </div>
        </div>
        <div class="home">
            <div class="container">
                <h1>Get started</h1>
                <div class="actions">
                    <button @click="redirectLogin">Log in</button>
                    <button @click="redirectSingUp">Sing up</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
h1{
    color: white;
    text-align: center;
}
h2{
    color: #D292FF;
    font-size: 3em;
}
p{
    color: #D292FF;
}
.tag {
    top: 0;
    position: absolute;
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 700;
}
.tag div{
    background-color: #D292FF;
    border-radius: 100%;
    width: 15px;
    height: 15px;
}
.container-home{
    display: grid;
    grid-template-columns: 60% 40%;
}
.presentation{
    background-color: #00002E;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
}
.description p{
    font-size: 2em;
}
.home{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

}
.actions{
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
}
.actions button{
    cursor: pointer;
    border: none;
    background-color: #3C46FF;
    width: 12em;
    height: 2.5em;
    color: white;
    font-size: 20px;
    border-radius: 10px;
    font-weight: 700;
    transition: all 0.2s ease;
}
.actions button:hover{
    background-color: #0000FF;
    
}
</style>