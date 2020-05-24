<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/footer.vue'
import Header from './components/header.vue'
// import home from './home.vue';
// import about from './about.vue';
// import work from './work.vue';
// import contact from './contact.vue';
export default {
  name: 'App',
  components: {
    Header, Footer, 
  }
}
</script>

<style>
body{
  margin:0; padding:0;
}
</style>
