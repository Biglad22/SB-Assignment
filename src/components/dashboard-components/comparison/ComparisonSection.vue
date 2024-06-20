<template>
    <div class=".bg-transparent">
        <div class="flex items-center justify-between mb-4">
            <h6 class="capitalize ">
                comparison
            </h6>
            <Button title="view all" text="secondary"  />
        </div>
        <div class="flex w-full flex-col gap-4 p-4 bg-white shadowed">
            <ComparisonComponent v-for="(i, index) in countries" :key="index" :flag="i.img" :country="i.country" :progress="i.comparison"  />
        </div>
    </div>
</template>
<script lang="ts">
    import ComparisonComponent from './ComparisonComponent.vue';
    import {defineComponent} from 'vue';
    import { useDashBoardData } from '../../../stores/dashboard';
    import Button from '../../Button.vue';

    export default defineComponent({
        name :'ComparisonSection',
        components : {
            ComparisonComponent,
            Button
        }, 
        setup(){
            const dashboardData = useDashBoardData();

            return{
                countries : dashboardData.countryStats
            }
        }
    })

</script>
<style scoped>
    .shadowed{
        box-shadow: 0px 3px 26px #00000017;
    }
</style>