<template>
    <span :class="`block ${emphasis? 'bg-[#0E77FF]' : 'bg-[#16B2FF17]'}  rounded-xl px-4 py-2 w-fit`" >
        <p :class="` leading-[100%] capitalize ${emphasis? 'text-white' : 'text-[#0E77FF]'} font-semibold`">
            {{ service }}
        </p>
    </span>
</template>
<script lang="ts">
    import { defineComponent } from 'vue';
    export default  defineComponent({
        name: 'ServiceChip',
        props:{
            service :{
                type : String,
                required : true,
            },
            emphasis :{
                type : Boolean,
                required: false,
                default: false
            }
        },


    })
</script>