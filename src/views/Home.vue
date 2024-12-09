<script setup>
import axios from 'axios';
import { onMounted } from 'vue';

async function getQuestions() {
    try {
        const response = await axios.get('http://localhost:3000/perguntas')    
        console.log(response);
        
    } catch (error) {
      console.error(error)  
    }
}

onMounted(() => {
    getQuestions();
})
</script>

<template>
    <div class="home">
        <h1 class="text-white text-4xl">Bem vindo ao <span class="cor-roxa-padrao animate-pulse">QuizKe</span></h1>
        <button>Iniciar</button>
    </div>
</template>

<style scoped>
    .home {
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
</style>

<style>
    #app {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
</style>