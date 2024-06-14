<template>
    <button type="button" :class="`${active? 'bg-[#0E77FF]' : 'bg-[#16B2FF17]'} rounded-lg px-4 py-3 w-fit`" @click="()=>setActiveService(service)" >
        <p :class="` leading-[100%] capitalize ${active? 'text-white' : 'text-[#0E77FF]'} font-semibold`">
            {{ service }}
        </p>
    </button>
</template>
<script lang="ts">
    import { defineComponent } from 'vue';
    import { useServicesStore } from '../../stores/OurService';
    export default  defineComponent({
        name: 'ServiceButton',
        props:{
            service :{
                type : String,
                required : true,
            },
            active :{
                type : Boolean,
                required: false,
                default: false
            }
        },
        setup(){
            const useServices = useServicesStore();
            return {setActiveService : useServices.setActiveService};
        }

    })
</script>