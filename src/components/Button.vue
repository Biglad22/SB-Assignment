<template>
    <button 
        v-if="!!to"
        :type="type"
        :class="buttonClasses"

        class="capitalize px-4 py-2 max-w-fit"
    >
        <span>{{ title }}</span>

    </button>

    <route-link 
        v-else
        :type="type ? type : 'button'"
        :class="buttonClasses"

        class="capitalize px-4 py-2 max-w-fit block"
    >
        <span>{{ title }}</span>

    </route-link>
    
</template>
<script lang="ts">
    import { computed, defineComponent } from 'vue';


    export default defineComponent({
        name : 'Button',
        props: {
            to: String,
            fill: {
              type: String as () => 'primary' | 'secondary',
              required: false,
            },
            title: String,
            text: {
              type: String as () => 'primary' | 'secondary',
              required: false,
            },
            type: {
              type: String as () => 'submit' | 'reset' | 'button',
              default: 'button',
            },
            round: {
              type: Boolean,
              required: false,
            },
            outline: String,
        },
        setup(props) {
            const buttonClasses = computed(() => {
                const classes = [];
                
                // Round or default rounded corner
                classes.push(props.round ? 'rounded-3xl' : 'rounded-[5px]');
                
                // Fill styles
                if (props.fill) {
                  if (props.fill === 'primary') {
                    classes.push('bg-white border-2 border-white text-black');
                  } else {
                    classes.push('bg-[#0E77FF] border-2 border-[#0E77FF] text-white');
                  }
                } else if (props.outline) {
                  // Outline styles
                  classes.push('bg-transparent border-2');
                  if (props.outline === 'primary') {
                    classes.push('border-white text-white');
                  } else {
                    classes.push('border-[#0E77FF] text-[#0E77FF]');
                  }
                } else if (props.text) {
                  // Text styles
                  if (props.text === 'primary') {
                    classes.push('text-white');
                  } else {
                    classes.push('text-[#0E77FF]');
                  }
                }
            
                return classes.join(' ');
            });

            return {
                buttonClasses,
            } 
        }  

    })


</script>