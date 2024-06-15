<template>
  <div :class="form === 'underlined' ? 'relative pt-6 w-full' : 'static pt-0 w-full'">
    <label
      v-if="form !== 'underlined'"
      :for="name"
      class="static pt-0 flex items-center mb-1 justify-between"
    >
      <span>
        <small class="text-black capitalize font-medium after:content mr-1">{{ label }}</small>
        <span v-if="required" class="text-red-500">*</span>
      </span>
      <button v-if="forgetable" type="button">
        <small class="text-red-500 font-medium capitalize">
          forgot {{ label }}?
        </small>
      </button>
    </label>

    <input
      v-if="type !== 'textarea'"
      :required="required"
      :type="type"
      :name="name"
      :placeholder="label"
      v-model="value"
      :class="[
        form === 'bordered'
          ? 'border border-[#707070] focus:border-[#0E77FF] hover:border-black p-2'
          : ' relative z-[5] bg-transparent border-b border-b-black focus:border-b-[#0E77FF] hover:border-b-black pt-0.5 pb-1 px-2 placeholder:text-black placeholder:text-[0.85rem] capitalize',
        'w-full peer leading-none focus:outline-none outline-none transition-all duration-300 ease-in-out'
      ]"
      @change="handleInputChange"
    />

    <textarea
      v-if="type === 'textarea'"
      :required="required"
      :name="name"
      :placeholder="label"
      v-model="value"
      rows="3"
      @change="handleInputChange"
      :class="[
        form === 'bordered'
          ? 'border border-[#707070] focus:border-[#0E77FF] hover:border-black p-2'
          : 'relative z-[5] bg-transparent border-b border-b-black focus:border-b-[#0E77FF] hover:border-b-black py-1 px-2 placeholder:text-transparent placeholder:capitalize placeholder:font-medium  focus:placeholder:text-transparent capitalize',
        'w-full peer leading-none focus:outline-none outline-none transition-all duration-300 ease-in-out'
      ]"
    ></textarea>

    <!---label for underlined input-->
    <label
      v-if="form === 'underlined' && type !== 'textarea'"
      :for="name"
      class="absolute  z-[5] left-2 transition-all duration-300 ease-in-out transform hidden
             peer-focus:bottom-6  peer-focus:flex
             peer-placeholder-shown:bottom-1   peer-placeholder-shown:flex 
             bottom-6 scale-8 items-center mb-1 justify-between"
    >
      <span>
        <small class="text-black capitalize font-medium  mr-1">{{ label }}</small>
        <span v-if="required" class="text-black">*</span>
      </span>
      <button v-if="forgetable" type="button">
        <small class="text-black font-medium capitalize">
          forgot {{ label }}?
        </small>
      </button>
    </label>

    <!-----label for underlined textare----->
    <label
      v-else-if="form === 'underlined' && type === 'textarea'"
      :for="name"
      class="absolute z-[4] left-2 transition-all duration-300 ease-in-out transform 
             peer-focus:top-1
             peer-placeholder-shown:top-6 peer-placeholder-shown:flex   
             top-1 scale-8 hidden items-center mb-1 justify-between"
    >
      <span>
        <small class="text-black capitalize font-medium after:content mr-1">{{ label }}</small>
        <span v-if="required" class="text-red-500">*</span>
      </span>
      <button v-if="forgetable" type="button">
        <small class="text-black font-medium capitalize">
          forgot {{ label }}?
        </small>
      </button>
    </label>
  </div>
</template>



<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InputField',
  data(){
    return{
      value : ''
    }
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    forgetable: {
      type: Boolean,
      required: false,
    },
    type: {
      type: String as () => 'password' | 'text' | 'textarea',
      required: false,
      default: 'text',
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    form: {
      type: String as () => 'bordered' | 'underlined',
      required: false,
      default: 'bordered',
    },
  },
  methods:{
    handleInputChange(){
      this.$emit('onChange', this.value)
    }
  }
});
</script>

<style scoped>
input::placeholder {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

input:focus::placeholder {
  opacity: 1;
}
</style>
