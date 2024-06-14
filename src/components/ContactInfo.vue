<!-- contact info is a compent takes a contact information and its associated icon -->

<template>
    <div class="flex items-center justify-start gap-1 w-fit py-1 mb-1">
        <slot name="icon"></slot>
        <p class=" font-light text-[#FFFFFF] flex-1">
            {{ info }}
        </p>
    </div>
</template>
<script lang="ts">
    import { defineComponent } from 'vue';
    export default defineComponent({
        name :'ContactInfo',
        props:{
            info:{
                type:String,
                required: true
            }
        }
    })
</script>