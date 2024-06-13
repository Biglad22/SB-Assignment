<template>
    <section class="w-[100vw] h-[80vh] ">

        <div class="w-1/3">
            <SectionTitle header="Transforming your ideas into Reality" section="our services" />
            <div class="flex flex-wrap">
                <ServicesChip v-for="(i, index) in services" :key="i" :service="i" :emphasis="index > 0 && index % 3 === 0 " />
            </div>
        </div>
    </section>
</template>
<script lang="ts">
    import { defineComponent } from 'vue';
    import ServicesChip from './servicesChip.vue';
    import SectionTitle from '../SectionTitle.vue'

    export default defineComponent({
        name: 'OurServices',
        components: {
            ServicesChip,
            SectionTitle
        },
        data(){
            return{
                services : [
                    'web development', 'mobile development', 'UI/UX designing', 'branding', 'cloud technology'
                ]
            }
        }
    })
</script>