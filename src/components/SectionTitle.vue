<template>
    <div>
        <span class=" flex flex-row gap-1 items-center">
            <PlayIcon />
            <h6 class="uppercase font-semibold text-[#0E77FF] leading-[100%]">
                {{ section }}
            </h6>
        </span>
        <h4 class="font-semibold leading-[125%] text-black capitalize">
            {{ header }}
        </h4>
    </div>
</template>
<script lang="ts">
    import { defineComponent } from 'vue';
    import PlayIcon from '../assets/icons/playIcon.vue';

    export default defineComponent({
        name:'SectionTitle',
        props:{
            section:{
                type:String,
                required:true
            },
            header:{
                type:String,
                required:true
            }
        },
        components:{
            PlayIcon
        }
    })
</script>