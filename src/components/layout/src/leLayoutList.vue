<template>
	<div class="le-container">
	  <div class="le-header">
	  	<slot name="header"></slot>
	  </div>
	  <div class="le-form">
	  	<slot name="form"></slot>
	  </div>
	  <div class="le-table">
	    <slot name="table"></slot>
	  </div>
	  <div class="le-page">
	    <slot name="page"></slot>
	  </div>
	  <slot></slot>
	</div>
</template>

<script>
export default{
	name:"le-layout-list"
}
	
</script>

<style>
	
</style>