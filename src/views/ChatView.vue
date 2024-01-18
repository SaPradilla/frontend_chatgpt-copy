<script setup>
import { ref, onMounted, watch, onUpdated,computed } from 'vue'
import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
// import "vue-code-highlight/themes/prism-twilight.css";  
// import "vue-code-highlight/themes/window.css";

// import { io } from 'https://cdn.socket.io/4.3.2/socket.io.esm.min.js';`
import Loader from '../components/UI/Loader.vue'
import { io } from 'socket.io-client';

const msg = ref({
  role: '',
  content: ''
})


const loading = ref(false)
const messages = ref([])
const chatContainer = ref(null);

onUpdated(() => {
  scrollChatToBottom();
    // formattedMessages()
})
watch(messages, () => {
  // formattedMessages()
  scrollChatToBottom();
});

const socket = io('http://localhost:3200');

socket.on('recovery message', (mgs) => {

  mgs.forEach(msg => {

    messages.value.push({
      role: 'user',
      content: msg.content
    });

    messages.value.push({
      role: 'assistant',
      content: msg.response
    });
  });

})

// respuesta de chatgpt
socket.on('chat message', (msg) => {
  messages.value.push(msg);
  loading.value = false
  scrollChatToBottom();
})

const sendMessage = async () => {
  loading.value = true

  if (msg.value.content.trim() !== '') {


    msg.value.role = 'user'
    messages.value.push({
      role: msg.value.role,
      content: msg.value.content
    });
    // Enviar mensaje al servidor
    socket.emit('chat message', msg.value.content);

    // Limpiar el campo de entrada
    Object.assign(msg.value, {
      role: '',
      content: '',
    });

  }
}
// Función para desplazar el contenedor de chat hacia abajo
const scrollChatToBottom = () => {
  chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
};


computed(() => {
  console.log('se ejecuto')
  return messages.value.map((message) => {
    if (message.content && message.content.startsWith('content:')) {
      // Extraer y formatear el código
      const codeMatch = message.content.match(/```([\s\S]*?)```/);
      if (codeMatch) {
        message.code = codeMatch[1].trim();
      }
    }
    return message;
  });
});

</script>

<template>
  <div class="contenedor-chat">
    <h1>Chat GayPT</h1>
    <div class="chat">

      <div class="contenido-chat" ref="chatContainer">

        <div v-for="message in messages" class="mensajes">
          <code-highlight v-if="message.code" :language="message.code ? 'python' : 'javascript'" class="code">
            <pre>
              {{ message.code }}
            </pre>
          </code-highlight>
          <p> <span>{{ message.role === 'user' ? 'Tu:' : 'GayGpt:' }}</span> {{ message.content }} </p>
        </div>
      </div>

      <div class="input">
        <form @submit.prevent="sendMessage">
          <input type="text" placeholder="Type prompt" v-model="msg.content">

          <button :disabled="loading || msg.content === '' " type="submit">
            <div class="loading" v-if="loading">
              <Loader />
            </div>
            <p id="send" v-else>Enviar </p>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contenido-chat {
  overflow-y: auto;
  height: 100%;
  width: 100%;
  scroll-behavior: smooth;
  padding: 10px;
}

.contenido-chat::-webkit-scrollbar {
  width: 7px;
}

.contenido-chat::-webkit-scrollbar-thumb {
  background-color: #474747;
  border-radius: 10px;
}

.contenido-chat::-webkit-scrollbar-thumb:hover {
  background-color: #7c7c7c;

}

#send {
  font-size: 1em;
}

.loading {
  display: flex;
  align-content: center;
  justify-content: center;
}

span {
  font-weight: 600;
}

h1 {
  text-align: center;
  color: white;
}

.contenedor-chat {
  display: grid;
  place-content: center;
}

.chat {
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 10px;
  height: 80vh;
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* padding: 0px 0px 20px 20px ;  */

}

.input {
  padding: 20px;

  width: 100%;
}

form {
  display: flex;
  width: 100%;
  height: max-content;
}

input {
  border-radius: 20px 0 0 20px;
  border: 1px solid #eee;
  flex: 1;
  padding: 15px;
  height: max-content;
}

input:focus {
  outline: none;
}

button {
  border: none;
  background: rgb(66, 140, 238);
  border-radius: 0 20px 20px 0;
  width: 80px;
  color: white;
  transition: all 0.2s ease-in;
  cursor: pointer;
  font-weight: 500;

}

button:hover {
  background: rgb(91, 152, 233);
}

button:active {
  background: rgb(106, 151, 210);
}

button:disabled {
  background: rgb(107, 108, 109);

}</style>
