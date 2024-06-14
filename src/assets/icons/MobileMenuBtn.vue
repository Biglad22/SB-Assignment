<template>
    
    <button type="button" class @click="handleClick">
        <span class="w-[1.5rem] h-[1.5rem] block bg-white shadow-md  rounded-"></span>
    </button>
</template>
<script lang="ts">
    import {defineComponent} from 'vue';

    export default defineComponent({
        name:'MobileMenuBtn',
        data(){
            return{
                clicked : false
            }
        },
        methods :{
            handleClick(){
                this.clicked = !this.clicked;
                this.$emit('onclick', this.clicked);
            }
        }
    })
</script>