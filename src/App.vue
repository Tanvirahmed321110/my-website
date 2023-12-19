<template>
  <div>
      <AppHeader/>
      <!-- chat in me -->
      <div class="chat">
        <div class="chat-container">
          <div class="chat-wraper">
            <div>
              <i class="fa-regular fa-message"> 
              </i> 
            </div>
            <h3>Chat</h3>
          </div>
        </div>
      </div>
      <!-- chat box -->
      <div class="chat-box"  >
        <div class="chat-box-container">
          <div class="chat-box-wraper">
            <div class="chat-box-head d-flex">
               <div class="profile"><i class="fa-solid fa-user"></i></div>
               <button>X</button>
            </div>
            <div class="chat-box-body">
              <div>
                <input type="text" placeholder="Name">
                <textarea name="" placeholder="Write Message..."></textarea>
                <button class="send-sms">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      <!-- up arrow -->
      <div class="up">
        <div class="up-contaienr">
          <a href="#">
            <div><i class="fa-solid fa-chevron-up"> </i></div>
            <div><i class="fa-solid fa-chevron-up"></i></div>
          </a>
        </div>
      </div>
      <AppFooter/>
  </div>  
</template>


<script>
  import AppHeader from '@/components/App-Header.vue'
  import AppFooter from '@/components/App-Footer.vue'
  export default{
    components:{
      AppHeader,
      AppFooter
    },
  
  }
</script>




<style scoped>
  .chat-container {
    position: fixed;
    right:10px;
    cursor: pointer;
    height:46px;
    width:100px;
    background: #28467E;
    bottom:140px;
    border-radius:30px ;
  }
  
  .chat-wraper{
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap:5px;
  }
  .chat-wraper h3{
    font-size: 19px;
    font-weight: 900;
    color:white;
    letter-spacing: .6px;
  }
  .chat-wraper i{
    color:white;
    font-size: 19px;
    margin-top: 4px;
  }
  
  /* chat box wraper */
  .chat-box-wraper{
    position: fixed;
    bottom: 50px;
    width: 300px;
    right:0px;
    background: #ccc7c7;
    box-shadow: 0 3px 5px whitesmoke;
    max-height: 340px;
    margin: 10px;
    border-radius: 10px;
    overflow-y: scroll;
  }
  .chat-box-head{
    width:302px;
    padding:10px;
    justify-content: space-between;
    background: wheat;
    box-shadow: 0 2px 4px rgb(194, 191, 191);
    align-items: center;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom: 1px solid rgb(161, 148, 139);
    position: fixed;
    bottom:390px;
    right:10px;
    z-index: 111;
  }
  .chat-box-head .profile{
    border: 1px solid rgb(68, 68, 68);
    padding:10px 14px;
    border-radius: 50%;
  }
  .chat-box-body{
    padding:25px;
    height:350px;
  }
  input{
    width: 96%;
  }
  textarea{
    border: none;
    outline: none;
    margin: 15px auto;
    width:96%;
    height:100px;
    padding:10px;
    border-radius: 3px;
  }
  textarea:focus,input:focus{
    border: 1px solid rgb(100, 98, 98);
    transition: .3s;
  }
  .send-sms{
    display: inline-block;
    width:96%;
    border: 1px solid rgb(68, 68, 68);
    margin-top: 15px;
    position: relative;
    z-index: 3;
    font-weight: 700;
  }
  .send-sms::after{
    content: '';
    position: absolute;
    top: 0;
    background: rgb(68, 68, 68);
    height:36px;
    width:0px;
    left: 50%;
    transition: all linear .34s;
  }
  .send-sms:hover::after{
    width: 100%;
    left:0;
    z-index:-1;
  }
  
  
  
  /* up arrow  */
  .up{
    position: fixed;
    right:10px;
    cursor:pointer;
    height:50px;
    width:50px;
    border-radius: 50%;
    background:rgb(255, 255, 255);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 1px;
  }
  .up-contaienr{
    animation: upArrow .5s linear alternate infinite;
    margin-top: 10px;
  }
  .up:hover{
    transition: .3s;
    color:black;
    transform: scale(1.05)
  }
  .up a div{
    margin-top: -8px;
  }
  .up a i{
    margin:0;
    color: rgb(143, 147, 150);
    font-size: 17px;
  }
  
  @keyframes upArrow {
    0%{
      transform: translateY(-6px);
    }
    100%{
      transform: translateY(0px);
    }
  }
  @keyframes typingDots {
  0%, 20% {
    content: ". ";
  }
  40%, 60% {
    content: "..";
  }
  80%, 100% {
    content: "... ";
  }
}

.fa-message{
  position: relative;
}
.fa-message::after {
  content: "";
  display: inline-block;
  animation: typingDots 1.5s infinite steps(1);
  position:absolute;
  top:-7px;
  left:3.2px;
}

</style>