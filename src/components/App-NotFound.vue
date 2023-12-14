<template>
    <div class="not-found max-width">
        <div class="btn-home-container">
            <button @click="goHome" class="btn-home"><span>GO HOME</span></button>
        </div>
        <img src="https://kfg6bckb.media.zestyio.com/yalantis-interactive-404.gif" alt="gif image">
    </div>
</template>




<script>
import { useRouter } from 'vue-router';

export default {
    setup(){
        const router  = useRouter()
        const goHome = ()=>{
            router.push('/')
        }
        // return
        return{
            goHome
        }
    }
}
</script>




<style scoped>
    .not-found{text-align: center; width:100% ; position: relative;}
    .not-found img{
        width:80%;
        height:400px;
        margin: 50px auto;
        border-top-left-radius: 100px;
        border-top-right-radius: 100px;
    }
    
    .btn-home{
        text-align: center;
        position: fixed;
        font-weight: 700;
        animation: btnHome 2s infinite alternate-reverse;
    }
    button span{
        display: inline-block;
        animation: btnText 2s infinite linear alternate;
    }
    
    @keyframes btnHome {
        0%{
            border: 1px solid red;
            color:red;
            background: rgb(95, 92, 85);
            border-radius: 10px;
        }
        100%{
            border: 1px solid blue;
            color:rgb(219, 255, 18);
            background: gray;
            border-radius: 10px;
        }
    }
    @keyframes btnText {
        0%{ 
            transform: translateX(5px);
        }
        100%{
            transform: translateX(-10px);
        }
    }
</style>









// .image-container {
//     width: 80%;
//     height: 100px; /* Set the desired height */
//     margin: 0 auto 50px auto; /* Adjust the bottom margin to position it */
//     /* border-bottom-left-radius: 100px;
//     border-bottom-right-radius: 100px; */
//     overflow: hidden;
//     background-image: url('https://kfg6bckb.media.zestyio.com/yalantis-interactive-404.gif');
//     background-size: cover;
//     background-position:100px 184px; 
//   } 