<template>
  <div>
    <div class="work" ref="work">
      <span>DE</span>
      <div class="developer">
        veloper
      </div>
      <div class="designer">
        signer
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted(){
    this.imgSize();
  },
  methods:{
    imgSize(){
      console.log(screen.height);
      this.$refs.work.height = screen.height *0.9 ;
    }
  },
}
</script>

<style scoped>
.work{
  width:100%;
  background: rgb(212,207,201);
  
}
.work span{
  display: inline-block;
  width:200px;
  position: absolute;
  left:40%;
  font-size: 335px;
  text-align: center;
}
.developer{
  width:50%;
  height:100%;
  /* border:1px solid red; */
  float:left;
  background: rgb(212,207,201);
}
.designer{
  width:50%;
  height:100%;
  /* border:1px solid red; */
  display: inline-block;
  float:right;
  background: rgb(212,207,201);
}
</style>