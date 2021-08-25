<template>
  <div>I am footer</div>

  <el-row>
    <el-col :span="12">
      <div class="grid-content bg-purple">
        <el-link href="javascript:void()">Copyright © 2021 Jingjianqian</el-link>
      </div>
    </el-col>
    <el-col :span="12">
      <div class="grid-content bg-purple">

         

        <el-link type="info" href="mailto:529463245@qq.com" icon="el-icon-message">Email</el-link>  
        <el-link type="info" href="http://github.com/jingjianqian">
          <edit style="width: 1em; height: 1em; margin-right: 8px;" />
      
        </el-link>
      </div>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
      <div class="grid-content bg-purple">
        <el-link href="https://beian.miit.gov.cn/">桂ICP备 2021004847号</el-link>
      </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: "Footer",
  props: {
    msg: String,
  },
  components:{
   
  }
};
</script>
<style>
</style>