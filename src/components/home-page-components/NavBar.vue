<template>
    <nav class="flex items-center justify-between pb-4 pt-5 bg-[#0E77FF] top-0 left-0 px-[var(--margin)] z-50 w-full fixed">
        <h6 class=" font-black uppercase text-white w-fit" >
            logo
        </h6>
        <div :class="`flex items-center gap-3 justify-center absolute h-[100vh] top-0 right-0 z-40  pe-[var(--margin)] p-4 bg-[#0E77FF] flex-col w-fit ${menuOpen? 'translate-x-0' : 'translate-x-full'}  min-[1100px]:translate-x-0 min-[1100px]:bg-transparent min-[1100px]:p-0 min-[1100px]:h-fit min-[1100px]:flex-row min-[1100px]:static transition-all duration-500 ease-in-out`">
            <Button v-for="(i, index) in textBtns" :key="index" :to="i.path" :title="i.name" text="primary" />
            <Button title="login"  to="/login" fill="primary" />
        </div>
        <MobileMenuBtn @onClick="newValue => menuOpen = newValue"/>
    </nav>
</template>
<script lang="ts">
    import { defineComponent } from 'vue';
    import Button from '../Button.vue';
    import MobileMenuBtn from '../../assets/icons/MobileMenuBtn.vue';

    interface TextBtnLinks{
        name : string,
        path : string
    }

    interface Data {
        textBtns : TextBtnLinks[],
        menuOpen : boolean
    }

    export default defineComponent({
        name: 'HomeNav',
        components: {
            Button,
            MobileMenuBtn
        },
        data():Data{
            return { 
                textBtns: [{name:'about', path: '/#about'}, {name:'services', path: '/#services'}, {name:'case studies', path: '#'}, {name: 'testimonials', path: '/#testimonials'}, {name: 'contact', path: '/#contact'}],
                menuOpen : false 
            };
        },
    })
</script>