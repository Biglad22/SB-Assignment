<template>
    <div>
        <div class="flex gap-4 items-center">
            <img :src="flag" class="w-[1.6rem]" alt="country flag" />
            <small>
                {{ country }}
            </small>
        </div>
        <div class="progress bg-transparent h-4 mt-1">
            <div 
                :class="`progress-bar flex gap-1 items-center` "
                :style="{ width: `${progress}%` }"
            >
                <div
                    role="progressbar"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    class="bg-[#0F77FA] flex-1 h-2 rounded-md"
                ></div>
                <small>
                    {{ progress }}%
                </small>
            </div>
        </div>
        
    </div>
</template>
<script lang='ts'>
    import {defineComponent} from 'vue';
    export default defineComponent({
        name: 'ComparisonComponent',
        props:{
            country :{
                type :String,
                required : true
            },
            flag:{
                type: String,
                required: false
            },
            progress:{
                type: Number,
                required : true
            }
        }
    })
</script>