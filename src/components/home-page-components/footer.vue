<template>
    <footer class="w-full py-[10vmin] px-[var(--margin)] bg-[#0E77FF]">
        <div class="flex flex-col lg:flex-row w-full flex-wrap items-start lg:items-start lg:justify-between h-max gap-4">
            <div class=" w-full flex-1 my-auto text-white font-light">
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
            <div class="flex-1 " >
                <SitemapTitle title="our services" />
                <SitemapLink v-for="(i, index) in services" :key="index" :title="i.title" />
            </div>
            <div class="flex-1 ">
                <SitemapTitle title="our links" />
                <SitemapLink v-for="(i, index) in links" :key="index" :title="i" />
            </div>
            <div class="flex-1" >
                <SitemapTitle title="contact us"/>
                <ContactInfo info="Al. Dummyodl 124/23 floor 123 Banswara Street, 02-577 India.">
                    <template #icon>
                        <LocationIcon />
                    </template>
                </ContactInfo>
                <ContactInfo info="00 1800 245453">
                    <template #icon>
                        <PhoneIcon />
                    </template>
                </ContactInfo>
                <ContactInfo info="hello@inkyy.com">
                    <template #icon>
                        <EmailIcon />
                    </template>
                </ContactInfo>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';
    import TwitterIcon from '../../assets/icons/TwitterIcon.vue';
    import FacebookIcon from '../../assets/icons/FacebookIcon.vue';
    import InstagramIcon from '../../assets/icons/InstagramIcon.vue';
    import SitemapTitle from '../SitemapTitle.vue';
    import { useServicesStore } from '../../stores/OurService';
    import SitemapLink from '../SitemapLink.vue';
    import ContactInfo from '../ContactInfo.vue';
    import LocationIcon from '../../assets/icons/LocationIcon.vue';
    import EmailIcon from '../../assets/icons/email.vue';
    import PhoneIcon from '../../assets/icons/Phone.vue'

    interface DataType {
        links : string[]
    }

    export default defineComponent({
        name :'Footer',
        components :{
            TwitterIcon,
            FacebookIcon,
            InstagramIcon,
            SitemapTitle,
            SitemapLink,
            ContactInfo,
            LocationIcon,
            EmailIcon,
            PhoneIcon
        },
        data():DataType{
            return{
                links : [
                    'terms & conditions',
                    'privacy policy',
                    'imprint',
                    'legal'
                ]
            }
        },
        setup(){
            const ourServivces = useServicesStore();
            const {services} = ourServivces ;
            return{services}
        }
    })
</script>