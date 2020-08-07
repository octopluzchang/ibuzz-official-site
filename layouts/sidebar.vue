<template>
  <div id="layout_side_bar">
   <nuxt id="main"/>
  </div>
</template>

<script>
  import Header from '~/components/Header.vue'
  import Footer from '~/components/Footer.vue'
  import SideBar from '~/components/SideBar.vue'
  import '~/styles/main.less'

  export default {
    components: {
      Header,
      Footer,
      SideBar
    }
  }

</script>
