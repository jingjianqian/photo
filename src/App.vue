<template>
    <el-container>
      <el-header>
        <el-menu  
          router 
          class="el-menu-app"
          mode="horizontal" 
          text-color="#000"
          active-text-color="#ffd04b">
          <el-menu-item index="github"><a href="https://github.com/jingjianqian" target="_blank">My Github</a></el-menu-item>
            <el-menu-item index="/about">ABOUT</el-menu-item>
          <el-menu-item index="/code">CODE</el-menu-item>
          <el-menu-item index="/photo">PHOTOS</el-menu-item>
          <el-menu-item index="/">HOME</el-menu-item>
        </el-menu>
      </el-header>
    </el-container>
    <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
html {
  padding:0;
  margin: 0;
}
#app {

  text-align: center;
}
.el-menu-item {
  float:right !important;
  font-weight: 700;
}
</style>
