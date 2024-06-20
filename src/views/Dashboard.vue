<template>
    <section class="bg-[#FCFCFC] h-100vh w-100vw px-[var(--margin)] py-[10vmin]" >
        <div class="flex flex-col gap-[10vmin]">
            <div class="flex justify-between items-start">
                <div>
                    <h3>Dashboard</h3>
                    <p class=" mt-2">
                        welcome back {{ activeUser.name.split(' ')[0] }}
                    </p>
                </div>
                <div class="flex justify-between items-center gap-4">
                    <Button title="add unit" fill="secondary" class="hidden md:block"/>
                    <img :src="activeUser.img" class="w-[2.4rem]" alt="andrew" />
                    <p class="hidden md:block">
                        {{ activeUser.name }}
                    </p>
                </div>
                
            </div>
            <FinanceSection />
            <div class="flex flex-col md:flex-row gap-4 w-fulls">
                <TeamMemSection :class="`flex-1`" />
                <ComparisonSection :class="`flex-1`"/>
            </div>
        </div>
        
    </section>
</template>
<script lang="ts">
    import TeamMemSection from '../components/dashboard-components/team-memebers/TeamMemSection.vue';
    import { defineComponent } from 'vue';
    import FinanceSection from '../components/dashboard-components/finances/FinanceSection.vue';
    import { useDashBoardData } from '../stores/dashboard';
    import Button from '../components/Button.vue';
    import ComparisonSection from '../components/dashboard-components/comparison/ComparisonSection.vue';

    export default defineComponent({
        name : 'Dashboard',
        components:{
            TeamMemSection,
            FinanceSection,
            Button,
            ComparisonSection
        },
        setup(){
            const dashboardInfo = useDashBoardData();
            return {
                activeUser : dashboardInfo.activeUser
            };
        }
    })
</script>
