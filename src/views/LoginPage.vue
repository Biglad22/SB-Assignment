<template>
    <div class="wrapper relate w-[100vw] h-[100vh] px-[40px]">

        <div class=" absolute w-9/12 md:w-1/2 top-1/3 left-1/2 -translate-x-1/2 sm:left-1/2 sm:top-1/2 sm:-translate-y-1/2 md:left-1/2 md:translate-x-0 p-4 bg-white rounded shadow-xl shadow-[#0e76ff4d] md:shadow-none">
            <h4 class="capitalize font-medium">
                login to access dashboard
            </h4>
            <form action="" class="flex flex-col gap-4 justify-center items-center">
                <InputField label="email" required type="text" />
                <InputField label="email" required type="password" forgetable />
                <Button round title="login" outline="secondary" />
            </form>
        </div>
        
    </div>
</template>
<script lang="ts">
    import { defineComponent } from 'vue';
    import InputField from '../components/InputField.vue';
    import Button from '../components/Button.vue';
    
    export default defineComponent({
        name: 'LoginPage',
        components:{
            InputField,
            Button
        }
    })
</script>
<style scoped>
    .wrapper{
        background-image: url('../assets/images/login-sec-img.png');
        background-position: 50% bottom;
        background-size: cover;
        background-repeat: no-repeat;
        
    }
    @media (max-width: 769px) {
        .wrapper{

            background-position: center center;
            background-size:contain
        }
    }
    @media (max-width: 639px){
        .wrapper{
            background-position: top center;
            background-size: 100% auto;
        }
    }
</style>