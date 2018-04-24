<template>
  	<div class="hello">
	    <el-row>
		  <el-button plain>朴素按钮</el-button>
		  <el-button type="primary" plain>主要按钮</el-button>
		  <el-button type="success" plain>成功按钮</el-button>
		  <el-button type="info" plain>信息按钮</el-button>
		  <el-button type="warning" plain>警告按钮</el-button>
		  <el-button type="danger" plain>危险按钮</el-button>
		</el-row>

		<el-select v-model="value" filterable placeholder="请选择">
		    <el-option
		      v-for="item in options"
		      :key="item.value"
		      :label="item.label"
		      :value="item.value">
		    </el-option>
		</el-select>

    <el-input v-model="input" placeholder="请输入内容"></el-input>
    {{input}}
	</div>
</template>

<script>
import Vue from 'vue';
export default {
  name: 'test',
  data () {
    return {
        options: [],
        value: '',
        input: 'wangqiang'
      }
  },
  created () {
    
    this.send()
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route'(){
      this.send()
    }
  },
  methods : {
    send(){
        
        const self = this;
        Vue.axios.get(Vue.$c.getApi('building/community/getcrmorderdetail')).then(function (response){
          self.options = [{
              value: '选项1',
              label: '黄金糕'
            }, {
              value: '选项2',
              label: '双皮奶'
            }, {
              value: '选项3',
              label: '蚵仔煎'
            }, {
              value: '选项4',
              label: '龙须面'
            }, {
              value: '选项5',
              label: '北京烤鸭'
            },{
              value: '选项6',
              label: '重庆小面'
            }]

            self.$closeLoading()
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  
  updated(){
    
  },
  mounted(){
   
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
