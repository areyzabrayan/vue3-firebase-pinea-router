<template>
    <div>
        <h1>Editar id:</h1>
        <form @submit.prevent="handleSubmit" >
            <input type="text" placeholder="nuevo url" v-model="url" >
            <button type="submit">Editar</button>

        </form>
    </div>
</template>

<script setup>
import { onMounted, ref} from "vue";
import { useRoute } from "vue-router";
import { useDatabaseStore } from "../stores/database";
const route = useRoute()
    console.log(route.params.id);
    const databaseStore = useDatabaseStore()

    const handleSubmit = () => {
        databaseStore.updateUrl(route.params.id, url.value)
    }
    const url = ref('')
    onMounted(async() =>{
         url.value = await databaseStore.leerUrl(route.params.id)
    })
</script>

