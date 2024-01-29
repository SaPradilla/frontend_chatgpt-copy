import { defineStore } from "pinia";
import {ref,onMounted,watch, onUpdated,computed} from 'vue'

export const useFormatCode = defineStore('formatCode',()=>{

    // format hightligh code 
    const highlightCodeInContent = (content) => {
        const codeRegex = /```(\w+)\n([\s\S]+?)\n```/g;
        let formattedContent = '';
      
        // Encuentra todas las secciones de código en el contenido
        content.replace(codeRegex, (match, language, codeContent) => {
          // Carga el lenguaje usando el autoloader de Prism
          Prism.languages[language] = Prism.languages[language] || {};
          const highlightedCode = Prism.highlight(codeContent, Prism.languages[language], language);
          
          // Envuelve el código en un div con una clase para estilos
          formattedContent += `${content.slice(0, content.indexOf(match))}<div class="code-container"> <div class="banner-code"> <p class="lenguaje">${language}</p>  <p class="copy"> Copy Code </p> </div> <div class="code-content"> <code class="language-${language}">${highlightedCode}</code> </div> </div>`;
          content = content.slice(content.indexOf(match) + match.length); // Actualiza el contenido sin la parte ya procesada
        });
      
        // Si no se encontró ningún código, simplemente agrega el contenido original
        if (!formattedContent) {
          formattedContent = content;
        }
      
        return formattedContent;
      };
  

    return{
        highlightCodeInContent
    }
})