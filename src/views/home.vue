<script lang="ts">
    import {defineComponent} from 'vue'
    import HeroSection from '../components/home-page-components/HeroSection.vue';
    import AboutUsSection from '../components/home-page-components/AboutUsSection.vue';
    import OurServiesSection from '../components/home-page-components/OurServiesSection.vue';
    import Footer from '../components/home-page-components/footer.vue';
    import SupportSection from '../components/home-page-components/SupportSection.vue';
    import CoreTechnologiesSection from '../components/home-page-components/CoreTechnologiesSection.vue';

    export default defineComponent({
        name: 'HomePage',
        components :{
            HeroSection,
            AboutUsSection,
            OurServiesSection,
            Footer,
            SupportSection,
            CoreTechnologiesSection
        }
    })
</script>

<template>
    <div>
        <HeroSection />
        <AboutUsSection />
        <OurServiesSection />
        <CoreTechnologiesSection />
        <SupportSection />
        <Footer :id="'contact'" />
    </div>
</template>