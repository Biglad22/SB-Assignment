<template>
    <div id="wrapper" class="relative after:hidden p-6 pe-[var(--margin)] sm:after:content-[''] sm:after:h-[100vh] sm:after:absolute sm:after:right-0 sm:after:top-1/2 sm:after:-translate-y-1/2 sm:after:z-[1] sm:after:w-1/2 sm:after:bg-[#0E77FF]">
        <div class="relative z-[2] ">
            <div class="flex mb-4 gap-4 items-center">

                <img :src="activeService.imagePath"  class="h-[3rem] w-auto" alt="" />
                <h5 class=" leading-none font-semibold capitalize">
                    {{ activeService.title}}
                </h5>
            </div>
            <p class="mb-4">
                {{ activeService.desc }}
            </p>
            <div>
                <ServicePerks v-for="(i) in activeService.perks" :perk="i" :class="'mb-2'" />
            </div>
        </div> 
        

        
    </div>
</template>
<script lang="ts">
    import { defineComponent } from 'vue';
    import ServicePerks from '../ServicePerks.vue';
    import { useServicesStore } from '../../stores/OurService';

    export default defineComponent({
        name: 'activeServiceSection',
        components:{
            ServicePerks
        },
        setup(){

            const useService = useServicesStore();
            return {activeService : useService.activeService};
        }
    })
</script>

<style scoped>
    @import '../../style.css';

    #wrapper{
        box-shadow: var(--shadow);
    }
</style>