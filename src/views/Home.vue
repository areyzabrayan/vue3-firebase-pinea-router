<template>
    <div>
        <h1>Home </h1>
            <form @submit.prevent="handleSubmit">
                <input type="text" placeholder="Ingrese URL" v-model="url">
                <button type="submit">Agregar</button>
            </form>
            

        <p>{{ userStore.userData?.email }}</p>
        <div v-if="databaseStore.loadingDoc">Loading...</div>
        <ul v-else>
            <li v-for="item of databaseStore.documents" :key="item.id">
                {{ item.id }} - {{item.name}}
                <br>
                {{ item.short }} 
                <br>
                <button @click="databaseStore.deleteUrl(item.id)">Eliminar</button>
                <button @click="router.push(`/editar/${item.id}`)">Editar</button>
            </li>
        </ul>

    </div>
</template>

<script setup>
 
 import {useUserStore} from '../stores/user'
import {useDatabaseStore} from '../stores/database'
import { ref } from 'vue';
import { useRouter } from "vue-router";

 const userStore = useUserStore()
 const databaseStore = useDatabaseStore()
 const url = ref('')
 const router = useRouter()

 const handleSubmit = () => {
    databaseStore.addUrl(url.value)
 }

 databaseStore.getUrls()
</script>
