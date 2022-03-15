<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
import { onMounted } from 'vue'
import { lazyLoadFiles } from '@/utils/common'
lazyLoadFiles('./pages/**/*.vue', 'vue')

onLaunch(() => {
  // console.log('App Launch')
})
onShow(() => {
  // console.log('App Show')
})
onHide(() => {
  // console.log('App Hide')
})
</script>
<style lang="scss">
/* 条件编译，仅在H5平台生效 */
// #ifdef H5
body::-webkit-scrollbar,
html::-webkit-scrollbar {
  display: none;
}

// #endif
view {
  box-sizing: border-box;
}

.flex {
  display: flex;
}

.uni-scroll-view::-webkit-scrollbar {
  /* 隐藏滚动条，但依旧具备可以滚动的功能 */
  display: none;
}

::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
}
</style>
