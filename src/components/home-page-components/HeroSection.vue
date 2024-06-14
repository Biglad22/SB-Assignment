<template>
    <section class="flex items-start justify-center flex-col w-[100vw] h-[125vh] px-[var(--margin)] py-[10vmin]" >
        <NavBar /> 
        <div class="w-full md:w-9/12 lg:w-8/12 xl:w-1/2">
            <h1 class="text-white  capitalize font-medium leading-[120%] mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting.
            </h1>
            <p class="text-[#9ABFFF] mb-4">
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
        background-position: right bottom;
        background-size: 100%;
        background-repeat: no-repeat;
    }

    h1,p{
        text-shadow: 0 2px 4px rgba(0,0,0,0.5);
    }

    @media (max-width:769px) {
        section{
            background-position: 60% 300%;
        }
    }
</style>