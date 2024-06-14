<template>
    <a :href="link" class="capitalize text-[#FFFFFF] font-light block py-1 mb-1 w-fit text-left">  
        {{ title }}
    </a>
</template>
<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name : 'SitemapLink',
        props : {
            title:{
                type: String,
                required:true
            },
            link:{
                type:String,
                required : false,
                default: '#'
            }
        }
    })
</script>