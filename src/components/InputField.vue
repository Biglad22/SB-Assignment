
<template>

    <div class="w-full">
        <label for="text" class=" flex items-center mb-1 justify-between">
            <span>
                <small class="text-black capitalize font-medium after:content mr-1">{{ label }}</small>
                <span v-if="required" class="text-red-500">*</span>
            </span>

            <button v-if="forgetable" type="button">
                <small class="text-red-500 font-medium capitalize">forgot {{label}}?</small>
            </button>  
        </label>
        <input :required :type class="border border-[#707070]  p-2 w-full focus:outline-none focus-within:outline-none focus:border-[#0E77FF] hover:border-black  transition-all duration-300 ease-in-out " />
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';

    export default defineComponent({
        name: 'InputField',
        props:{
            label : {
                type: String,
                required: true
            },
            forgetable :{
                type: Boolean,
                required: false
            },
            type:{
                type : String as ()=>'password' | 'text',
                required: false,
                default: 'text'
            },
            required:{
                type : Boolean,
                required: false,
                default: false
            }

        }
    })
    
</script>