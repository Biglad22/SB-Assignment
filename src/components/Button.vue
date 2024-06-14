<template>
  <button
    v-if="!to"
    :type
    :class="buttonClasses"
    class="capitalize px-4 py-2 max-w-fit"
    @click="handleAction"
  >
    <span class="lead-none">{{ title }}</span>
    
  </button>

  <router-link
    v-else
    :class="[buttonClasses, 'capitalize px-4 py-2 max-w-fit block']"
    :to="resolveTo()"
  >
    <span>{{ title }}</span>
  </router-link>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { RouteLocationRaw, RouterLinkProps } from 'vue-router';

export default defineComponent({
  name: 'Button',
  props: {
    to: {
      type: [String, Object] as PropType<RouteLocationRaw>,
      required: false
    },
    fill: {
      type: String as () => 'primary' | 'secondary',
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
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
    action: {
      type :Function,
      required :false
    }
  },
  methods:{
    handleAction(e : Event){
      
      if(!this.action) return;
      return this.action(e);
    }
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

    const resolveTo = (): RouterLinkProps['to'] => {
      // Ensure 'to' prop is either string or RouteLocationRaw
      if (typeof props.to === 'string') {
        return props.to;
      } else if (props.to) {
        return props.to;
      } else {
        // Handle the case where 'to' is undefined
        console.error('Invalid route location:', props.to);
        return '/';
      }
    };

    return {
      buttonClasses,
      resolveTo,
    };
  },
});
</script>
