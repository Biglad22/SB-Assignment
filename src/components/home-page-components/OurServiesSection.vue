<template>
    <section class="w-[100vw] h-[100vh] py-[10vmin] bg-[#0e76ff09] ps-[var(--margin)] flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-[10vmin]">

        <div class=" sm:flex-1 flex flex-col h-fit gap-4">
            <SectionTitle header="Transforming your ideas into Reality"  section="our services" :class="'h-fit'" />
            <div class="flex flex-wrap gap-2 ">
                <ServicesButton v-for="i in services" :key="i.title" :service="i.title" :active="activeService.title === i.title" />
            </div>
        </div>
        <ActiveServiecSection :class="'flex-1'" />
    </section>
</template>
<script lang="ts">
    import { defineComponent } from 'vue';
    import ServicesButton from './serviceButton.vue';
    import SectionTitle from '../SectionTitle.vue';
    import { useServicesStore } from '../../stores/OurService';
    import ActiveServiecSection from './ActiveServiecSection.vue';

    export default defineComponent({
        name: 'OurServices',
        components: {
            ServicesButton,
            SectionTitle,
            ActiveServiecSection
        },
        setup(){
            const useServices = useServicesStore();
            return {
                services: useServices.services,
                activeService: useServices.activeService,
            }
    
        }
    })
</script>../../stores/OurServiceNLinks