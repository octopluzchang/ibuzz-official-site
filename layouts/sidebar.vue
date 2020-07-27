<template>
  <div id="layout_side_bar">
   <Header/>
   <div class="section dark">
      <div class="wrapper">
       <div class="row breadcrumbs">
         <div class="col-auto">
           <nuxt-link :to="'/' + $store.state.products[$store.state.selectedProduct].name">產品</nuxt-link>
         </div>
         /
         <div class="col-auto">
           <nuxt-link :to="'/' + $store.state.products[$store.state.selectedProduct].name + '/' + $store.state.products[$store.state.selectedProduct].services[$store.state.selectedService].title">{{this.$route.params.services}}</nuxt-link>
         </div>
       </div>
        <div class="row">
          <div class="col-lg-6">
            <h1 class="title">
              i-Buzz {{this.$route.params.services}}
            </h1>
            <p>
              {{$store.state.products[$store.state.selectedProduct].services[$store.state.selectedService].description}}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div sticky-container>
      <div class="sideBarWrapper">
        <div class="desktopOnly" v-sticky sticky-side="both">
          <div class="wrapper">
            <SideBar id="sideBar"/>
          </div>
        </div>
      </div>
      <nuxt id="main"/>
    </div>
    <Footer/>
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
