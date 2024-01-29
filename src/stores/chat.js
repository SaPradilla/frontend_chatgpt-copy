import { defineStore } from "pinia";
import { watch, ref,onUpdated,computed, onMounted} from 'vue'
import { useSocket } from './socket.js'
import { useAuth } from './auth.js'

export const useChat = defineStore('chat', () => {

  const Auth = useAuth()

  const Socket = useSocket()

  const loading = ref(false)
  const chatContainerRef = ref(null);


  const msg = ref({
    role: '',
    content: ''
  })
  const noMessages = ref(false)

  const messages = ref([])

  watch(messages, () => {
    scrollChatToBottom();
  });
  
  // onUpdated(()=>{
    
  //   console.log('se ejecuta ')
  // })

  
  // Función para desplazar el contenedor de chat hacia abajo
  const scrollChatToBottom = () => {
    console.log(chatContainerRef.value.scrollHeight)
    if (chatContainerRef.value.scrollHeight) {
      chatContainerRef.value.scrollTop = chatContainerRef.value.scrollHeight;
    }
  };
  
  const setChatContainerRef = (ref)=> {
    chatContainerRef.value = ref;
  }

  const sendMessage = async () => {
    loading.value = true;

    if (msg.value.content.trim() !== '') {
      msg.value.role = 'user';

      // Añadir mensaje al arreglo para el backend
      messages.value.push({
        role: msg.value.role,
        content: msg.value.content
      });


      // Enviar mensaje
      Socket.socket.emit('chat message', messages.value, msg.value.content, Auth.userLogin.id);

      // Limpiar el campo de entrada
      Object.assign(msg.value, {
        role: '',
        content: '',
      });
    }
  };



  return {

    //states
    loading,
    msg,
    noMessages,
    messages,

    //Methods
    sendMessage,
    scrollChatToBottom,
    chatContainerRef,
    setChatContainerRef,


  }
})