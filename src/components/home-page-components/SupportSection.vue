<template>
    <section class="relative w-[100vw] h-[110vh]">
        <div id="shadowed-card" class="absolute bottom-[10vmin]  right-[var(--margin)] w-[80vw] md:w-[40vw] bg-white p-5">
            <h6 class="text-[#292929] font-semibold capitalize mb-4">send us message</h6>
            <form ref="myForm" @submit.prevent="handleForm" action="https://formsubmit.co/emmanuelaberuagba22@email.com" method="POST" class="mb-4">
                <InputField @onChange="newValue => email = newValue" form="underlined" label="your email" required type="text" name="email"  />
                <InputField @onChange="newValue => fullName = newValue"  form="underlined" label="your name" required type="text" name="full name"/>
                <InputField @onChange="newValue => phoneNo = newValue"  form="underlined" label="phone number" required type="text" name="phone number"/>
                <InputField @onChange="newValue => phoneNo = newValue"  form="underlined" label="subject" type="text" name="_subject"/>
                <InputField @onChange="newValue => message = newValue" label="message"  type="textarea" form="underlined" name="message"/>
                <div class="flex gap-2 my-4">
                    <input type="checkbox" name="get updates" v-model="getUpdates" id="get-updates" class="h-[2rem] w-[2rem] rounded"/>
                    <small class="flex-1">By sending this message, you confirm that you have read and agreed to our privacy-policy</small>
                </div>
                <Button title="submit" round fill="secondary" :action="handleForm" /> 

            </form>
            <!---validation message-->
            <small 
                v-if="helperMsg !== ''" 
                :class="`block w-full p-1 rounded-sm text-center font-medium capitalize ${error ? 'bg-red-100 text-red-800' 
                : 'bg-green-100 text-green-800' }`"
                >

                {{ helperMsg }}
            </small>
        </div>
    </section>
</template>
<script lang="ts">
    import {defineComponent} from 'vue';
    import InputField from '../InputField.vue';
    import Button from '../Button.vue';
    export default defineComponent({
        name:'SupportSection',
        components:{
            InputField, 
            Button
        },
        data(){
            return{
                email : '',
                fullName: '',
                phoneNo:'',
                subject:'',
                message:'',
                getUpdates: false,
                error : true,
                helperMsg : ''
            }
        },
        methods:{
            validateInput(){

                const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
                const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;

                //only checking required inputs
                if(emailRegex.test(this.email) && this.fullName !== '' && phoneRegex.test(this.phoneNo)){
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
                        (this.$refs.myForm as HTMLFormElement).submit();

                        this.error = false
                        return this.helperMsg = 'submited, thank you';
                    }

                }catch(err){
                    return this.helperMsg = "something's wrong, try again" 
                }
            }   

        }
    })
</script>
<style scoped>
    section {
        background-image: url('../../assets/images/support-sec-bg-main.png'), url('../../assets/images/support-sec-bg.png'), url('../../assets/images/support-sec-img.png');
        background-position: left 30vh, 20% 10%, 1vw 55vh;
        background-size: 100vw auto, 15vmin auto, 40vw auto;
        background-repeat: no-repeat, no-repeat, no-repeat;
    }
    @media (max-width:1100px) {
        section{
            background-position: left 50vh, 20% 10%, 1vw 60vh;
            background-size: 100vw auto, 15vmin auto, 40vw auto;
        }
    }
    @media (max-width: 767px){
        section{
            background-position: left 65vh, 20% 10%, 1vw 75vh;
            background-size: 100vw auto, 15vmin auto, 40vw auto;
        }
    }

    @media (max-width: 419px){
        section{
            background-position: left 75vh, 20% 10%, 1vw bottom;
            background-size: cover, 15vmin auto, 40vw auto;
        }
    }

    #shadowed-card{
        box-shadow: var(--shadow);
    }
</style>