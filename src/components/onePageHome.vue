<template>
  <div>
    <full-page :options="options" id="fullpage" ref="fullpage">
        <div class="section">
            <!-- <h3>vue-fullpage.js</h3> -->
            <div class="main">
            <img src="../assets/me3.jpg" alt="" ref="mainimg">
            <div class="intro">
              Hi, I'm Sora Ji<br>
              I'm a full-stack developer.<br>
              Based in Seoul, South Korea
            </div>
            <!-- <button class="viewbox">
              View more about me →
            </button> -->
            <section class="container">
              <button data-hover="Let's go!"><div>View more about me →</div></button>
            </section>
          </div>
        </div>
        <div class="section">
            <div class="slide">
                <h3>Slide 2.1</h3>
            </div>
            <div class="slide">
                <h3>Slide 2.2</h3>
            </div>
            <div class="slide">
                <h3>Slide 2.3</h3>
            </div>
        </div>
        <div class="section">
            <h3>Section 3</h3>
        </div>
    </full-page>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      options: {
        afterLoad: this.afterLoad,
        navigation: true,
        anchors: ['page1', 'page2', 'page3'],
        sectionsColor: ['#d4cfc9', '#ff5f45', '#0798ec', '#fec401', '#1bcee6', '#ee1a59', '#2c3e4f', '#ba5be9', '#b4b8ab']
      },
    }
  },
  mounted(){
    this.imgSize();
  },
  methods:{
    imgSize(){
      this.$refs.mainimg.height = screen.height *0.80 ;
    }
  },
}
</script>

<style scoped>
@CHARSET "ISO-8859-1";
/* section1 start */
.main{ 
  width:100%;
  /* height:100%; */
  text-align:right;
  background: rgb(212,207,201);
  background: linear-gradient(90deg, rgba(212,207,201,1) 0%, rgba(212,207,201,1) 35%, rgba(207,202,196,1) 100%);
}
.main .intro{
  font-size:50pt;
  position: absolute;
  top:55%;
  left:5%;
  background-color: #d3cec8;
}
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
    a:hover{border-bottom: 1px solid #111;} 
    button:hover{cursor: pointer}
    button {
      background: transparent; outline: none;
      position: relative;
      border: 2px solid #2c3e50;
      padding: 15px 50px;
      overflow: hidden;
    }

    /*button:before (attr data-hover)*/
    button:hover:before{opacity: 1; transform: translate(0,0);}
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

/* section1 end */
/* Reset CSS
 * --------------------------------------- */

a{
    text-decoration:none;
}
table {
    border-spacing: 0;
}
fieldset,img {
    border: 0;
}
address,caption,cite,code,dfn,em,strong,th,var {
    font-weight: normal;
    font-style: normal;
}
strong{
    font-weight: bold;
}
ol,ul {
    list-style: none;
    margin:0;
    padding:0;
}
caption,th {
    text-align: left;

}
h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    font-size: 100%;
    margin:0;
    padding:0;
}
q:before,q:after {
    content:'';
}
abbr,acronym { border: 0;
}
*{
    -webkit-box-sizing: border-box; /* Safari<=5 Android<=3 */
    -moz-box-sizing: border-box; /* <=28 */
    box-sizing: border-box;
}

/* Custom
 * --------------------------------------- */
body {
    font-family: arial, helvetica;
}
.section{
    position: relative;
    text-align: center;
}
#section-1 h2{
    color: #fff;
    font-size: 10em;
    font-weight: 900;
}
#section-1 h1{
    font-size: 2em;
    font-weight: 100;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    margin: 1.5em auto 1em auto;
    color: #35495e;
    padding-right: 30px;
    padding-left: 30px;
}
#section-1 li {
    display: inline-block;
    margin: 1.25em 0.3em;
}
.section-1-button{
    padding: 0.93em 1.87em;
    background: #35495e;
    border-radius: 5px;
    display: block;
    color: #fff;
}
h3{
    font-size: 5em;
    text-align: center;
    color: #fff;
    font-weight: bold;
}
#logo{
    position: fixed;
    top: 20px;
    left: 20px;
    color: #fff;
    font-weight: bold;
    z-index: 99;
    font-size: 1.9em;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
}

/* Menu
 * --------------------------------------- */
#menu-line {
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 159px;
    height: 2px;
    background: #fff;
}

#menu{
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 70;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    letter-spacing: 1px;
    font-size: 1.1em;
}
#menu li{
    display: inline-block;
    margin: 10px 0px;
    position: relative;
}
#menu a{
    color: #fff;
    padding: 0 1.1em 1.1em 1.1em;
}
#menu li.active a:after{
    content: '';
    margin: 0 1.1em 0 1.1em;
    height: 2px;
    background: #fff;
    display: block;
    position: absolute;
    bottom: -6px;
    left: 0;
    right: 0;
    display: block;
}

/* Actions buttons
 * --------------------------------------- */
.actions{
    position: fixed;
    bottom: 2%;
    margin: 0 auto;
    z-index: 99;
    left: 0;
    right: 0;
    text-align: center;
}
.actions li{
    display: inline-block;
    margin: 0.3em 0.3em;
}
.actions-button{
    padding: 0.73em 1.47em;
    background: rgba(53, 73, 94, 0.47);
    border-radius: 5px;
    display: block;
    color: #fff;
    cursor: pointer;
}

/* Twitter
 * --------------------------------------- */
.twitter-share i{
    vertical-align: middle;
    position: relative;
    top: 2px;
    display: inline-block;
    width: 38px;
    height: 14px;
    color: white;
    top: -4px;
    left: -2px;
    fill: #fff;
}
.twitter-share svg{
    height: 40px;
    margin-top: -10px;
}
.view-github{
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 999;
    padding: .93em 1.87em;
    background: #35495e;
    border-radius: 5px;
    display: block;
    color: #fff;
}

</style>