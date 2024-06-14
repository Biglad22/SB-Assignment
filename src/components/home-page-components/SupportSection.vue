<template>
    <section class="relative w-[100vw] h-[110vh]">
        <div id="shadowed-card" class="absolute bottom-[10vmin]  right-[var(--margin)] w-[80vw] md:w-[40vw] bg-white p-5">
            <h6 class="text-[#292929] font-semibold capitalize mb-4">send us message</h6>
            <form @submit="handleForm" action="https://formsubmit.co/emmanuelaberuagba22@email.com" method="POST" class="mb-4">
                <InputField form="underlined" label="your email" required type="text" name="email" :value="email" />
                <InputField form="underlined" label="your name" required type="text" name="full name"/>
                <InputField form="underlined" label="phone number" required type="text" name="phone number"/>
                <InputField label="subject"  type="textarea" form="underlined" name="subject"/>
                <div class="flex gap-2 my-4">
                    <input type="checkbox" name="get updates" id="get-updates" class="h-[2rem] w-[2rem] rounded"/>
                    <small class="flex-1">By sending this message, you confirm that you have read and agreed to our privacy-policy</small>
                </div>
                <Button title="submit" round fill="secondary" :action="handleForm" /> 
            </form>
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
                phoneNo:''
            }
        },
        methods:{
            handleForm(e : Event){
                console.log('somthing happended');
                console.log(this.email);
                
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