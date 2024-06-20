<template>
    <div class="shadowed flex items-center justify-between bg-white rounded gap-2 p-2 shadow-[0px 3px 26px #00000017]">
        <div class="flex items-center justify-start gap-2  rounded">
            <img :src="image" class="rounded-full w-[2.4rem] h-auto" alt="" />
            <p class="capitalize">
                {{ name }}
            </p>
        </div>
        <RoleChip :TMrole="TMrole"/>
        
    </div>
</template>
<script lang="ts">
    import {defineComponent} from 'vue';
    import RoleChip from './RoleChip.vue';
    export default defineComponent({
        name: 'TMCard',
        components:{
            RoleChip
        },
        props:{
            name:{
                type: String,
                required: true
            },
            TMrole:{
                type: String,
                required: true
            },
            image:{
                type :String,
                required: true
            }
        }
    })
    
</script>
<style scoped>
    .shadowed{
        box-shadow: 0px 3px 26px #00000017;
    }
</style>