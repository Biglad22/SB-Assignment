<template>
    <div class="wrapper relate w-[100vw] h-[100vh] px-[40px]">

        <div class=" absolute w-9/12 md:w-1/3 top-1/3 left-1/2 -translate-x-1/2 sm:left-1/2 sm:top-1/2 sm:-translate-y-1/2 md:right-[var(--margin)] md:translate-x-0 p-4 bg-white rounded shadow-xl shadow-[#0e76ff4d] md:shadow-none">
            <h4 class="capitalize font-medium">
                login to access dashboard
            </h4>
            <form action="" class="flex flex-col gap-4 justify-center items-center">
                <InputField name="email" label="email" required type="text" @onChange="newValue => email = newValue"/>
                <InputField name="password" label="password" required type="password" forgetable @onChange="newValue => password = newValue" />
                <Button round title="login" outline="secondary" :action="handleForm" />
                <small 
                v-if="helperMsg !== ''" 
                :class="`block w-full p-1 rounded-sm text-center font-medium capitalize ${error ? 'bg-red-100 text-red-800' 
                : 'bg-green-100 text-green-800' }`"
                >

                {{ helperMsg }}
            </small>
            </form>
        </div>
        
    </div>
</template>
<script lang="ts">
    import { defineComponent } from 'vue';
    import InputField from '../components/InputField.vue';
    import Button from '../components/Button.vue';
    import TeamMemSection from '../components/dashboard-components/team-memebers/TeamMemSection.vue';
    
    export default defineComponent({
        name: 'LoginPage',
        components:{
            InputField,
            Button,
            TeamMemSection
        },
        data(){
            return{
                email: '',
                password : '',
                error : true,
                helperMsg : ''
            }
        },
        methods:{
            validateInput(){

                const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

                //only checking required inputs
                if(emailRegex.test(this.email) && this.password !== ''){
                    this.error = false
                    
                    return true;
                }else{
                    this.helperMsg = 'please fill all required fields correctly';

                    return false;
                }
            },
            handleForm(){
                try{

                    ///check to see if required data have ben entered
                    const verified = this.validateInput();

                    ///conditionally submit form if true
                    if(verified){

                        this.error = false
                        return this.$router.push('/dashboard');
                    }

                }catch(err){
                    return this.helperMsg = "something's wrong, try again" 
                }
            }   

        }
    })
</script>
<style scoped>
    .wrapper{
        background-image: url('../assets/images/login-sec-img.png');
        background-position: -40vw bottom;
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