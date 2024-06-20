<template>
    <div :class="`p-0 ${!last ? 'pe-4 border-e border-[#C5C9D7]' : '' }`">
        <p class="text-[#8990AD] font-semibold uppercase tracking-[2.91px]">{{ type }}</p>
        <div v-if="value" class="flex gap-4 items-center mt-4">
            <h5 class="text-[#11193C] font-medium">
                {{ value }}
            </h5>
            <span v-if="change" class="block w-fit">
                <small
                :class="type === 'profit' ? 'text-[#0F77FA] font-semibold' : 'text-[#FF4B75] font-semibold'"
                >
                    +{{ change }}%
                </small>
            </span>
        </div>
        <div v-else-if="currencies" class="flex gap-2 mt-4">
            <img v-for="(i, index) in  currencies" :src="i" alt="" :key="index" class="w-[1.8rem] h-[1.8rem] object-contain object-center p-1.5 rounded-full bg-[#2465fc2a]">
        </div>
    </div>
</template>
<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name : 'FinanceCard',
        props :{
            type : {
                type : String,
                required : true
            },
            value : {
                type : String,
                required : false
            },
            change : {
                type : Number,
                required : false
            },
            currencies :{
                type: Array<string>,
                required: false,
            },
            last:{
                type : Boolean,
                required : false
            }

        }
    })
</script>