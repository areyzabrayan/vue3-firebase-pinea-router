<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="handleSubmit">
            <input type="email" placeholder="Ingrese email" v-model="email">
            <input type="password" placeholder="Ingrese contraseña" v-model="password">
            <button type="submit" :disabled="userStore.loadingUser">Iniciar sesion</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import {useUserStore} from '../stores/user';
// import {useRouter} from 'vue-router';

    const userStore = useUserStore()

    const email = ref('Brayan@test1.com')
    const password = ref('654321')

    // const router = useRouter()

    const handleSubmit = async () => {
        if (!email.value || password.value.length < 6) {
            return alert('llena los espacios vacios');
        }
        await userStore.loginUser(email.value, password.value)
        //  router.push('/')
        console.log('Procesando formulario');
        console.log(email.value);
        console.log(password.value);
    }
  
</script>
