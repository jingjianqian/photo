<template>
    <div><p>I am Home page</p></div>
    

    <el-empty description="描述文字"></el-empty>
    <el-empty description="描述文字"></el-empty>
    <Footer />
</template>
<script>

import Footer from '@/components/footer/index';
export default {
    name:'Home',
    components:{
        Footer
    }
}
</script>