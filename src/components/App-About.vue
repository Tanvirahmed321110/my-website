<template>
    <div id="about" class="max-width">
        <div class="about-container">
            <div class="about-wraper">
                <div class="about-left">
                    <div class="about-left-header">
                        <h2 class="name"> I'M TANVIR AHMED.</h2>
                        <h2>WE<span class="lenier">B_D</span>ESIGNER</h2>
                    </div>
                    <p class="about-left-info">Hello i am  ibna foysal ahmed based web designer & front-end devloper.Focus on crafting clean & user-friendly design. I have do already  20+ website design </p>
                    <div class="btn-about">
                        <button class="button">MORE ABOUT ME <span><i class="fa-solid fa-share"></i></span></button>
                    </div>
                </div>
                <div class="about-middle"></div>
                
                <div class="about-right">
                    <div class="flip-box">
                        <div class="flip-box-inner">
                            <div class="flip-box-front">
                                <img src="https://global.rowan.edu/images/programs/mem-header.jpg" alt="">
                            </div>
                            <div class="flip-box-back">
                                <h2>Me</h2>
                                <h3>Thanks For Visite My Site</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
export default {
    setup(){
        
    }
}
</script>



<style>
    #about{
        margin-top: 50px;
        margin-bottom: 50px;
    }
    .about-wraper{
        display: flex;
        justify-content: space-between;
        padding:55px;
        gap:10%;
    }
    .about-left{
        width:50%;
        padding-right:0px;
    }
    .about-left-header{
        padding-left: 35px;
        font-family:  Cochin, Georgia, ;
        font-size: 27px;
    }
    .about-left-header :last-child{
        /* color:rgb(160, 136, 136); */
        color:var(--white-60)
    }
    .about-left-info{
        margin:25px 0;
        padding-bottom: 4px;
        font-size: 16px;
        line-height: 23px;
        color: var(--white-60);
    }
    .name{position: relative;color:orangered}
    .name::before {
        content:'';
        position: absolute;
        left:-45px;
        width:28px;
        bottom:23px;
        height: 3px;
        background: orange;
        border-radius: 15px;
    }
    
    .lenier{
        background: linear-gradient(to right, #5312eb,rgb(207, 235, 53), #337dd1dc,#a5f723) !important;
        -webkit-background-clip: text;
        background-clip: text !important;
        color: transparent !important;
        /* font-size: px; */
        letter-spacing: .6px !important;
        font-weight: 700 !important;
    }
    .btn-about button{
        border-radius: 46px 0 54px 2px;
        padding:15px 45px;
        padding-right:90px;
        position: relative;
    }
    .btn-about button span{
        background-color:rgb(179, 65, 23);
        padding:13px;
        position: absolute;
        font-size: 18px;
        padding-right: 35px;
        border-radius: 0 0 45px;
        top:1.5px;
        right:3px;
        transition: .3s;
        bottom:2px;
    }
    .btn-about button span:hover{
        background-color:orangered;
    }
    .button::after{
    content: '';
    position: absolute;
    background:rgb(114, 83, 25);
    height:45px;
    width:0px;
    border-radius:45px 0  0;
    left:0px;
    opacity: 0;
    top:0;
    transition: .4s;
    z-index: -1;
    }
    .button:hover.button::after {
        width:194px;
        opacity: 1;
    }
    
    .about-middle{
        width:5px;
        margin: 0 auto;
        text-align: center;
        /* box-shadow: 0 0 1px 10px rgba(85, 83, 83, 0.582); */
        margin-top: 10px;
        border-right: 5px solid;
        border-image: radial-gradient( #5bf70e,rgb(54, 49, 40),rgb(93, 93, 248))round 10;
        border-radius: 25px;
    }
    .about-right{
        width: 40%;
        /* background: orange; */
    }
    .about-right img{
        width:95%;
        height:100%;
        object-fit: cover;
        border-radius: 15px;
        box-shadow: 0 3px 9px;
        border:5px solid rgb(42, 42, 46);
        animation: imgAni 2.5s linear alternate infinite;
    }
    
    /* cart flip srart here */
    .flip-box{
        background-color: transparent;
        width:95%;
        height:100%;
        perspective: 1000px;
        cursor: pointer;
    }    
    .flip-box-inner{
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: 1s;
        transform-style: preserve-3d;
    }
    .flip-box:hover .flip-box-inner{
        transform: rotateX(180deg);
    }
    .flip-box-front, .flip-box-back {
        position: absolute;
        width:100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }
    .flip-box-back{
        transform: rotateX(180deg);
        background: orange;
        border-radius: 15px;
        border: 1px solid #f1f1f1;
    }
    @keyframes imgAni {
        0%{
            transform: translateX(-10px);
        }
        50%{
            border:5px solid gray;
            transition: 1s;
            transform: scale(1.03);
        }
        100%{
            transform: translateX(10px);
        }
    }
</style>