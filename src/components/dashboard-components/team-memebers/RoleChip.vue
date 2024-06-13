<template>
    <span class=" rounded-3xl text-[#0F77FA] bg-[#0f79fa0f] capitalize block w-fit px-4 py-2">
        <p class="w-fit">{{ TMrole }}</p>
    </span>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';

    export default defineComponent({
        name:'RoleChip',
        props:{
            TMrole : {
                type : String,
                required : false

            }
        }
        
    })
</script>