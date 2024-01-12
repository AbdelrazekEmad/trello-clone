<template>
  <HeaderTest></HeaderTest>
  <MainBoard></MainBoard>
</template>

<script>
import HeaderTest from './components/HeaderTest.vue';
import MainBoard from './components/Board/MainBoard.vue'

export default {
  components: {
    HeaderTest,
    MainBoard
  },
}

</script>

<style scoped>
body {
  overflow: hidden;
}
</style>
