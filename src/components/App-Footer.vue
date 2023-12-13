<template>
    <div id="footer">
        <div class="footer-wraper max-width">
            <div class="footer-container">
                <div class="footer-col">
                    <div class="d-flex footer-col-head">
                        <div class="icon-container"><i class="fa-brands fa-osi"></i></div>
                        <h3>About</h3>
                    </div>
                    <div class="d-flex footer-col-sub">
                        <i class="fa-solid fa-location-dot"></i>
                        <div class="footer-right">
                            <p>Block A , Mirpur-10 Dhaka Bangladesh </p>
                        </div>
                    </div>
                    <div class="d-flex footer-col-sub">
                        <i class="fa-solid fa-phone-flip"></i>
                        <div class="footer-right">
                            <p>01701957294 </p>
                        </div>
                    </div>
                    <div class="d-flex footer-col-sub">
                        <i class="fa-regular fa-paper-plane"></i>
                        <div class="footer-right">
                            <p>tanvirahmed321110@gmail.com </p>
                        </div>
                    </div>
                    <div class="footer-email">
                        <input type="email" placeholder="Enter Email">
                        <button><i class="fa-regular fa-paper-plane"></i></button>
                    </div>
                </div>
                
                
                <div class="footer-col">
                    <div class="d-flex footer-col-head">
                        <div class="icon-container"><i class="fa-solid fa-ghost"></i></div>
                        <h3>Component</h3>
                    </div>
                    <div class="component">
                        <li>App Home</li>
                        <li>App About</li>
                        <li>App Skill</li>
                        <li>App Contact</li>
                        <li>App Project</li>
                    </div>
                </div>
                <div class="footer-col">
                    <div class="d-flex footer-col-head">
                        <div class="icon-container"><i class="fa-solid fa-phone-slash"></i></div>
                        <h3>Contact Me</h3>
                    </div>
                    <div class="contact">
                        <li><i class="fa-brands fa-facebook"></i></li>
                        <li><i class="fa-brands fa-whatsapp"></i></li>
                        <li><i class="fa-regular fa-envelope"></i></li>
                        <li><i class="fa-brands fa-skype"></i></li>
                    </div>
                </div>
                <div class="footer-col">
                    <div class="d-flex footer-col-head">
                        <div class="icon-container"><i class="fa-regular fa-message"></i></div>
                        <h3>Have Any Comment?</h3>
                    </div>
                    <div class="comment" >
                        <textarea name="" id="" placeholder="*Write Comment..."></textarea>
                        <input type="text" placeholder="*Name">
                        <input type="email" placeholder="*Email">
                        <button class="button">Send</button>
                    </div>
                </div>
            </div>
            
            <div class="last">
                <hr class="hr">
                <div class="text-center mt-2"> 
                    <small>&copy;copyright 2023 tanvirahmed</small>
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



<style scoped>
    #footer{
        position: absolute;
        padding: 45px 0;
        margin-top: auto;
        bottom:0;
        width: 100%;
        height: 400px;
        background-color: var(--black-90);
        /* border-radius: 50%; */
        border-top-left-radius: 10%;
        border-top-right-radius: 10%;
    }
    
    .footer-container{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap:25px;
    }
    .footer-col{
        /* background:red; */
    }
    .footer-col-head{
        align-items: center;
        gap:14px;
    }
    .footer-col-head .icon-container{
        border-radius: 50%;
        border:1px solid var(--white-60);
        text-align: center;
        padding: 9px 12px;
    }
    .footer-col-head h3{
        color: var(--white-100);
        font-weight: 500;
        letter-spacing: .4px;
    }
    .icon-container{
        color: var(--white-60);
    }
    .footer-col-sub{
        display:flex;
        align-items: center;
        margin: 22px 0;
        color:var(--white-60)
    }
    .footer-col-sub i{
        width:40px;
    }
    .footer-right{
        width: 80%;
    }
    /* footer-email */
    .footer-email input{
        border:2px solid blueviolet;
        background-color:rgb(43, 41, 41);
        width:90%;
    }
    .footer-email button{
        background: blueviolet;
        padding: 11px 15px;
        margin-left: -43px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
    .footer-email button i{color:white}
    .footer-email button:hover{background: orange;}
    .footer-email input:focus{background: orange;}
    
    
    /* component */
    .component{
        margin-top: 18px;
    }
    .component li{
        color:var(--white-60);
        margin-bottom: 10px;
    }
    /* contact */
    .contact{
        margin-top: 24px;
    }
    .contact li {
        width: 140px;
        padding:3px 0;
        text-align: center;
        border: 1px solid var(--white-60);
        border-radius: 20px;
        margin-bottom:10px;
        cursor: pointer;
        transition: .3s;
    }
    .contact li i{
        color:var(--white-60)
    }
    .contact li:hover{
        background:rgb(54, 52, 51);
    }
    .comment{
        margin-top: 23px;
    }
    .comment textarea ,.comment input{
        width:100%;
        margin-bottom: 8px;
        box-shadow: 1px 3px 5px wheat;
        background-color: var(--black-70);
        color:white;
        border:1px solid var(--white-60);
        outline:none;
        transition: .3s;
    }
    .comment textarea:focus,
     .comment input:focus {
        border:1px solid orangered
    }
    .comment textarea{
        padding: 15px 10px;
        height:70px;
        border-radius: 5px;
    }
    
    .comment button{
        margin-top: 10px;
    }
    
    
    /* Last Footer */
    .last small{
        color:wheat
    }
    .hr{
        margin-top: 20px;
        border: 1px solid rgb(65, 64, 64);
    }
</style>