<template>
    <div class="flex flex-row items-center gap-2 ">
        <ListItem />
        <p class="flex-1 text-black leading-none">
            {{ perk }}
        </p>
    </div>
</template>
<script lang="ts">
    import ListItem from '../assets/icons/ListItem.vue'
    import {defineComponent} from 'vue';
    
    export default defineComponent({
        name : 'ServicePerk',
        components:{
           ListItem 
        },
        props:{
            perk : {
                type : String,
                required : true
            } 
        }
    })
</script>