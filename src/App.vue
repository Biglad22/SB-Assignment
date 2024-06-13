<template>
   <router-view></router-view>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import LoginPage from './views/LoginPage.vue';

    export default defineComponent({
        name : 'App',
        components :{
            LoginPage
        }
    })
</script>

<style scoped>

</style>
