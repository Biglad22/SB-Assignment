<script lang="ts">
    import {defineComponent} from 'vue'
    import HeroSection from '../components/home-page-components/HeroSection.vue';
    import AboutUsSection from '../components/home-page-components/AboutUsSection.vue';
    import OurServiesSection from '../components/home-page-components/OurServiesSection.vue';
    import Footer from '../components/home-page-components/footer.vue';

    export default defineComponent({
        name: 'HomePage',
        components :{
            HeroSection,
            AboutUsSection,
            OurServiesSection,
            Footer
        }
    })
</script>

<template>
    <div>
        <HeroSection />
        <AboutUsSection />
        <OurServiesSection />
        <Footer />
    </div>
</template>