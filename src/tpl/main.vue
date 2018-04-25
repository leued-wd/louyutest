<template>
  <div>
    <leheader></leheader>
    <div class="le_main">
      <router-view ></router-view>
    </div>
  </div>
</template>
<script>
import leheader from "./header.vue"
export default {
  data() {
    return {

    }
  },
  components: {
    leheader
    
  }
}
</script>

