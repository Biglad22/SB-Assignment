<template>
   <router-view></router-view>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import Dashboard from './views/Dashboard.vue';

    export default defineComponent({
        name : 'App',
        components :{
            Dashboard
        }
    })
</script>

