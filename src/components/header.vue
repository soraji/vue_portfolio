<template>
  <div class="nav">
    <div class="headerRight">
      <router-link tag="li" to="home"><li>HOME</li></router-link>
      <router-link tag="li" to="about"><li>ABOUT</li></router-link>
      <router-link tag="li" to="work"><li>WORK</li></router-link>
      <router-link tag="li" to="contact"><li>CONTACT</li></router-link>
    </div>
  </div>
</template>

<script>
// import home from './home.vue';
// import about from './about.vue';
// import work from './work.vue';
// import contact from './contact.vue';
export default {
  components: {
    // home,about,work,contact
  }
}
</script>

<style scoped>
.nav{
  width:100%;
  margin:0px auto;
  padding: 10px 0;
  height:40px;
  font-size: 16pt;
  color:#efc06d;
  background: rgb(212,207,201);
  border-bottom:1px solid #575757;
}
.headerRight{
  color: #2c3e50;
  float:right;
  padding: 5px 20px 0 20px;
  
}
.headerRight .router-link-exact-active{
  color: #2c3e50;
  font-weight: bold;
  font-size:18pt;
  margin-top:-1px;
}
.headerRight a{
  color:fff;
  text-decoration: none;
  cursor: pointer;
}
.headerRight li{
  width:150px;
  float:left;
  list-style: none;
  text-align: center;
  cursor: pointer;
}
.headerRight li:hover{
  color:#ffffff;
}
.headerRight li .router-link-exact-active{
  color:#efc06d;;
}
a:link{
  color:#fff;
}
a:visited{
  color:#fff;
}
</style>