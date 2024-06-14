<template>
    <h6 class="relative capitalize text-[#FFFFFF] font-semibold after:absolute after:content-[''] after:w-[2.4em] after:h-[4px] after:bottom-0 after:left-0 after:rounded-[0.5px] w-fit after:bg-[#21B3FF] pb-2 mb-2">
        {{ title }}
    </h6>
</template>
<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'SitemapTitle',
        props:{
            title:{
                type:String,
                require: true
            }
        }
    })
</script>