<template>
    <section class="p-[var(--margin)] bg-[#0e76ff09] flex flex-col justify-center items-center gap-[2.5vmax]">
        <h6 class="text-black capitalize font-semibold">
            core technologies
        </h6>
        <p class="w-[80%] text-center">
            Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.
        </p>


        <!---acts as pill nav bar in core technologies section-->
        <div id="pill-nav" class="flex items-center gap-0 px-6 w-fit mb-4  py-2 rounded-3xl bg-white">
            <p class="px-4">Design</p>
            <span class="divider block h-[1rem] w-[1px] bg-black"></span>
            <p class="text-[#0E77FF] px-4">Development</p>
            <span class="divider block h-[1rem] w-[1px] bg-black"></span>
            <p class="px-4">Marketing</p>
            
        </div>

        <div class="flex justify-center flex-wrap gap-9">
            <TechIcon v-for="(i, index) in techIcons" :isLight="index !== 1 "  :img="i" />
        </div>
    </section>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import TechIcon from './TechIcon.vue';
    import {TechIconsLinks} from '../../assets/TechIconsLinks';

  export default defineComponent({
    name :'CoreTechnologiesSection',
    components:{
        TechIcon
    },
    data(){
        return{
            techIcons : TechIconsLinks
        }
    }
  });
</script>
<style scoped>

    @import '../../style.css';

    #pill-nav{
        box-shadow: var(--shadow-l);
    }
    

</style>