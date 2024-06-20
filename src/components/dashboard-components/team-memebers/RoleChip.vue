<template>
    <span class=" rounded-3xl text-[#0F77FA] bg-[#0f79fa0f] capitalize block w-fit px-3 py-1">
        <small class="w-fit leading-none">{{ TMrole }}</small>
    </span>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';

    export default defineComponent({
        name:'RoleChip',
        props:{
            TMrole : {
                type : String,
                required : true

            }
        }
        
    })
</script>