
<template>
    <!---component will contain icon of technologies in core technologies section-->
    <span :class="`block p-2 rounded-md w-fit  border border-[#0E77FF] ${isLight ? 'bg-[white]' : 'bg-[#0E77FF]'  }`">
        <img class="h-[3.2rem] w-[3.2rem] object-contain object-center" :src="img" alt="tech image" />
    </span>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';
    export default defineComponent({
        name:'TechIcon',
        props:{
            isLight:{
                type:Boolean,
                required : true
            },
            img:{
                type:String,
                required : true
            }
        }
    })
</script>