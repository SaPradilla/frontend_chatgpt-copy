import { defineStore } from "pinia";
import {onMounted,watch} from 'vue'
import { io } from 'socket.io-client';
import {useChat} from './chat.js'
import {useAuth} from './auth.js'

export const useSocket = defineStore('socket',()=>{

    const Chat = useChat()
    const Auth = useAuth()
    const socket = io('http://localhost:3200');

    // eventos

    // recuperar mensajes
    socket.on('recovery message', (mgs) => {
        if(mgs.length === 0) {
            Chat.noMessages = true
        }
    
        mgs.forEach(msg => {

            // Añadir mensaje al arreglo para el backend
            Chat.messages.push({
                role: 'user',
                content: msg.content
            });
            // Añadir mensaje de asistente al arreglo para el backend
            Chat.messages.push({
                role: 'assistant',
                content: msg.response
            });
        });
        

    });
    // respuestas
    socket.on('chat message', (msg) => {

        Chat.messages.push(msg);
        Chat.loading = false
        Chat.scrollChatToBottom();

    });


    onMounted(()=>{
        socket.emit('recovery messages', Auth.userLogin.id);
    })
    
    
    return{
        socket
    }
})