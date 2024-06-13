<template>
    <div class="flex items-center justify-between bg-white rounded gap-2 p-3 shadow-[0px 3px 26px #00000017]">
        <div class="flex items-center justify-start gap-2  rounded">
            <img :src="image" class="rounded-full w-[3.2rem] h-auto" alt="" />
            <h6 >
                {{ name }}
            </h6>
        </div>
        <RoleChip TMrole="TMrole"/>
        
    </div>
</template>
<script lang="ts">
    import {defineComponent} from 'vue';
    export default defineComponent({
        name: 'TMCard',
        components:{
            RoleChip :()=>{import('./RoleChip.vue')}
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