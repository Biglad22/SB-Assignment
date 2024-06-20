<template>
    <div>
        <div class="flex items-center justify-between mb-4">
            <h6 class="capitalize ">
                team members
            </h6>
            <Button title="view all" text="secondary"  />
        </div>
        <div class="flex flex-col gap-2">
            <TMCard v-for="(i, index) in teamMembers" :key="index" :name="i.name" :TMrole="i.role" :image="i.img"/>
        </div>
    </div>
</template>


<script lang="ts">
    import { useDashBoardData } from '../../../stores/dashboard';
    import { defineComponent } from 'vue';
    import Button from '../../Button.vue';
    import TMCard from './TMCard.vue';

    export default defineComponent({
        name: 'TeamMemberSection',
        setup(){
            const dashBoardData = useDashBoardData();
            
            return {teamMembers : dashBoardData.teamMembers}
        },
        components:{
            Button,
            TMCard
        }
        
    })
</script>