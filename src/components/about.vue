<template>
  <div >
    <div class="main">
      <img src="../assets/me2.jpg" alt="" ref="mainimg">
      <div class="intro">
        Hi, I'm Sora Ji<br>
        I'm a full-stack developer.<br>
        Based in Seoul, South Korea
      </div>
      <!-- <button class="viewbox">
        View more about me →
      </button> -->
      <section class="container">
        <router-link to="/about">
          <button data-hover="Let's go!"><div>View more about me →</div></button>
        </router-link>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
    }
  },
  mounted(){
    this.imgSize();
  },
  methods:{
    imgSize(){
      this.$refs.mainimg.height = screen.height *0.9 ;
    }
  },
}
</script>

<style scoped>
*{
  /* font-family: 'Kalam', cursive; */
  font-family: 'Barlow', sans-serif;
}
.main{ 
  width:100%;
  text-align:left;
background: rgb(207,202,196);
background: linear-gradient(180deg, rgba(207,202,196,1) 0%, rgba(207,203,194,1) 25%, rgba(206,201,195,1) 47%, rgba(206,200,194,1) 75%, rgba(215,210,204,1) 88%);
}
.main .intro{
  font-size:50pt;
  position: absolute;
  top:55%;
  left:5%;
  background-color: transparent;
  color:#2c3e50;
}
/*
 .main .viewbox{
  border:2px solid #2c3e50;
  font-size:16pt;
  position: absolute;
  top:85%;
  padding:5px 10px;
  left:30%;
  cursor: pointer;
} */
*, *:before, *:after{
  box-sizing: border-box;
  padding: 0; margin: 0;
}
section.container{
    min-width: 500px;
    /* margin: 10% auto; */
    text-align: center;
    position: absolute;
    top:77%;
  /* padding:5px 10px; */
    left:21.5%;
  }
    /* a:hover{border-bottom: 1px solid #111;}  */
    button:hover{cursor: pointer}
    button {
      background: transparent; outline: none;
      position: relative;
      border: 2px solid #2c3e50;
      padding: 15px 50px;
      overflow: hidden;
    }

    /*button:before (attr data-hover)*/
    button:hover:before{opacity: 1; transform: translate(0,0); text-decoration: none;}
    button:before{
      content: attr(data-hover);
      position: absolute;
      /* top: 1.1em;  */
      left: 0;
      width: 100%;
      text-transform: uppercase;
      letter-spacing: 3px;
      font-weight: 800;
      font-size: .8em;
      opacity: 0;
      transform: translate(-100%,0);
      transition: all .3s ease-in-out;
    }
      /*button div (button text before hover)*/
      button:hover div{opacity: 0; transform: translate(100%,0)}
      button div{
        text-transform: uppercase;
        letter-spacing: 3px;
        font-weight: 800;
        font-size: .8em;
        transition: all .3s ease-in-out;
      }
      
</style>