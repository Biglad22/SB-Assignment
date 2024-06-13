<template>
    <section class="relative w-[100vw] h-[100vh]">
        <NavBar /> 
        <div class="absolute top-1/2 left-0 -translate-y-1/2 w-1/2 ">
            <h1 class="text-white capitalize font-medium leading-[120%]">
                Lorem Ipsum is simply dummy text of the printing and typesetting.
            </h1>
            <p class="text-[#9ABFFF]">
                Our products are fully custom-made, built with the latest technologies and cloud-architectures.
            </p>
            <Button title="get started" to="/login" fill="primary" round />
        </div>
    </section>
</template>
<script lang="ts">
    import {defineComponent} from 'vue';
    import Button from '../Button.vue';
import NavBar from './NavBar.vue';

    export default defineComponent({
        name:'HeroSection',
        components: {
            Button,
            NavBar
        }
    })
</script>

<style scoped>
    section{
        background-image: url('../../assets/images/hom-hero-sec.png');
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
    }
    @media (max-width:769px) {
        section{
            background-position: 70% center;
        }
    }
</style>