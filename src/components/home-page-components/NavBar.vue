<template>
    <nav class="flex items-center justify-between pb-4 pt-6 sticky buttom-[100%] left-0 z-50 w-full">
        <h6 class=" font-black uppercase text-white w-fit" >
            logo
        </h6>
        <div class="flex items-center justify-between">
            <Button v-for="(i, index) in textBtns" :key="index" :title="i" text="primary" />
            <Button title="login"  to="/login" fill="primary" />
        </div>
    </nav>
</template>
<script lang="ts">
    import { defineComponent } from 'vue';
    import Button from '../Button.vue';

    interface Data {
        textBtns : string[]
    }

    export default defineComponent({
        name: 'HomeNav',
        components: {Button},
        data():Data{
            return { 
                textBtns: ['about', 'services', 'case studies', 'testimonials', 'contact'] 
            };
        }
    })
</script>