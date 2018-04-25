<template>
	<div class="le-container">
	    <div class="le-header">
	    	<h2>测试列表页</h2>
		</div>
		<div class="le-form">
			<el-row>
			  <el-col :span="4">
			  		<el-input v-model="querydata.input" placeholder="订单id"></el-input>
			  	</el-col>
			   <el-col :span="4">
			  		<el-button type="primary" @click="search">搜索</el-button>
			  </el-col>
			</el-row>
		</div>
		<div class="le-table">
			<el-row>
			  <el-col>
				    <el-table :data="tableData" style="width: 100%">
				      <el-table-column
				        prop="name"
				        label="名称">
				      </el-table-column>
				      <el-table-column
				        prop="advertiser_name"
				        label="广告主">
				      </el-table-column>
				      <el-table-column
				        label="状态">
				         <template slot-scope="scope">
					        <span>{{ scope.row.show_status_id }}</span>
					      </template>
				      </el-table-column>
				      <el-table-column
				      label="操作"
				      width="130">
				      <template slot-scope="scope">
				        <el-button type="text" size="small">提交审核</el-button>
				        <el-button type="text" size="small">删除</el-button>
				      </template>
				    </el-table-column>
				    </el-table>
			  </el-col>
			</el-row>
		</div>
		<div class="le-page">
			<el-pagination
			    layout="prev, pager, next"
			    :total="50">
			 </el-pagination>
		</div>
	</div>

</template>

<script>
import Vue from 'vue';
export default{
	name:"testlist",
	data(){
		return {
			querydata:{
				input:""
			},
			tableData:[]
		}
	},
	methods:{
		search(){
		const self = this;
        Vue.axios.get(Vue.$c.getApi('fangzhou/orders/list')).then(function (response){
        	self.tableData = response.data.data.list;
        })
        .catch(function (error) {
          console.log(error);
        });
		}
	},
	mounted(){
		this.search()
	}
}
	
</script>

<style>
	
</style>