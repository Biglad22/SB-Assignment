<template>
    <div class="flex gap-4 w-full flex-wrap" >
        <FinanceCard v-for="(i, index) in financeData" :key="index" :type="i.type" :value="i.value" :change="i.change" :currencies="i.currencies" :last="index === financeData.length - 1" :class="'flex-1 '"/>
    </div>
</template>
<script lang="ts">
    import { useDashBoardData } from '../../../stores/dashboard';
    import FinanceCard from './FinanceCard.vue';
    import { defineComponent } from 'vue';

    export default defineComponent({
        name:'FinanceSection',
        components: {
            FinanceCard
        }, 
        setup(){
            const dashBoardData = useDashBoardData();
            return {financeData : dashBoardData.finances};
        }
    })
</script>