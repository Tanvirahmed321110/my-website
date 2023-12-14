<template>
    <div id="header">
        <div class="header-container">
            <div class="header-wraper d-flex-between max-width">
                <div class="header-left">
                    <h2 class="text-shadow-1">IBNA FOYSAL TANVIR</h2>
                </div>
                <div class="header-right">
                    <div class="header-right-nav">
                        <ul>
                            <li class="active-gradient-text"><router-link to="/">Home</router-link></li>
                            <li><router-link to="/about">About</router-link></li>
                            <li>Skill</li>
                            <li><router-link to="projects">Project</router-link></li>
                            <li>Contact</li>
                            <li><i class="fa-regular fa-moon"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>    
    <router-view></router-view>
</template>

<script>
    export default {
        setup(){
            
        }
    }
</script>

<style>
    @import '../assets/style.css';
    
    #header {
        background-color: var(--black-70);
        box-shadow: 0  2px 5px rgb(143, 81, 81);
        z-index: 100;
    }
    .header-wraper {
        height: 80px;
        width:100%;
    }
    .header-left h2 {
        color: var(--blue-100);
        font-family:sans-serif;
        letter-spacing: .8px;
        font-size: 26px;
    }
    
    /* ===== header-right-nav =======*/
    .header-right-nav ul {
        display: flex;
    }
    .header-right-nav ul li {
        margin-left: 20px;
        font-size: 17px;
        font-weight: 600;
        letter-spacing: .3px;
        color: aliceblue;
        padding: 5px 6px;
        cursor: pointer;
        position: relative;
        user-select: none;
    }
    li a{color:aliceblue}
    li a:active{
        color:red;
    }
    
    .header-right-nav li::before{
        background: linear-gradient(to right, #b2b6b0,#2c2fe7, #c91720, #78f007dc,#2c38e7);
        cursor: pointer;
        width: 0px;
        height:1px;
        content:'';
        position: absolute;
        bottom:0px;
        left:50%;
        transition: linear all .3s;
    }
    .header-right-nav li:hover::before{
        width: 100%;
        left:0
    }
    
    
</style>
