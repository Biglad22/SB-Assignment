<template>
    <button type="button"  @click="handleClick" class="relative z-[60] block min-[1100px]:hidden">
        <span class="w-[1.5rem] h-[1.5rem] block bg-white shadow-md  rounded-full"></span>
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
                return this.$emit('onClick', this.clicked);
            }
        }
    })
</script>