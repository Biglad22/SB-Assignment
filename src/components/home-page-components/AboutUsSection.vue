<template>
    <section class="relative py-[20vmin]">
        <div class="absolute  px-[var(--margin)] md:px-0 w-full xl:w-1/3 md:right-[var(--margin)] -translate-y-1/2 top-1/2 flex flex-col gap-4">
            <SectionTitle section="about us" header="Great Digital Agency"/>
            <h6 class="text-black leading-[150%]">
                Our products are fully custom-made, built with the latest technologies and cloud-architectures.
            </h6>
            <p class=" font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex odio, turpis accumsan congue. Quisque blandit dui Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In convallis porta mauris non aliquam.
            </p>
            <Button round outline="secondary" title="get started" to="/login" />

        </div>
    </section>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';
    import Button from '../Button.vue';
    import SectionTitle from '../SectionTitle.vue';

    export default defineComponent({
        name: 'AboutUsSection',
        components:{
            Button,
            SectionTitle    
        }
    })
</script>

<style scoped>
    section {
        width: 100vw;
        height: 150vh;
        background-image: url('../../assets/images/login-sec-img.png'), url('../../assets/images/about-us-bg.png'), url('../../assets/images/about-us-bg2.png');
        background-position: -40vw bottom, 80vw 20vmin, 85vw bottom;
        background-size: auto 100%, 25% auto,30% auto;
        background-repeat: no-repeat, no-repeat, no-repeat;
    }

    @media (max-width: 767px) {
        section {
            height: 120vh;
        }
        section{
            background-position: 120% center, 60vw 20vmin, 70vw bottom;
            background-size: auto 100vh, 45% auto, 60% auto;
        }
    }
    @media (max-width: 560px) {
        section {
            height: 110vh;
        }
    }
    @media (max-width: 460px) {
        section{
            background-position: 150% center, 60vw 20vmin, 70vw bottom;
            background-size: auto 100vh, 45% auto, 60% auto;
        }
    }


    h6,p{
        text-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
</style>