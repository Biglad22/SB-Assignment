<template>
    <footer class="w-full py-4 bg-[#0E77FF]">
        <div>
            <p class="mb-4">
                Lorem Finaldream rure dolor in reprehenderit in voluptate velit esse cillum dolore e uis nostrud exercitation isi ut aliquip ex ea commodo consequat.
            </p>
            <div  class="flex gap-4">
                <a href="https://www.facebook.com/" class="block leading-none">
                    <FacebookIcon />
                </a>
                <a href="https://www.facebook.com/" class="block leading-none">
                    <TwitterIcon />
                </a>
                <a href="https://www.facebook.com/" class="block leading-none">
                    <InstagramIcon />
                </a>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';
    import TwitterIcon from '../../assets/icons/TwitterIcon.vue';
    import FacebookIcon from '../../assets/icons/FacebookIcon.vue';
    import InstagramIcon from '../../assets/icons/InstagramIcon.vue';

    export default defineComponent({
        name :'Footer',
        components :{
            TwitterIcon,
            FacebookIcon,
            InstagramIcon
        }
    })
</script>