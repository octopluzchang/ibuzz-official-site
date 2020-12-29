<template>
  <div id="layout" class="theme" :class="{
     business: $store.state.selectedProduct == 1,
     voc: $store.state.selectedProduct == 2,
     articles: $store.state.selectedProduct == 3,
     }">
    <img src="/thumbnail.jpg" style=" width: 0; height: 0; position: absolute; z-index: -100;">
    <div sticky-container>
      <Header />
      <nuxt id="main" />
    </div>
    <Toast />
    <Footer />
    <div id="fb-root"></div>
    <Form id="contactForm" v-if="$store.state.showForm" />
  </div>
</template>

<script>
  import Header from '~/components/Header.vue'
  import Footer from '~/components/Footer.vue'
  import Form from '~/components/Form.vue'
  import Toast from '~/components/Toast.vue'
  import Breadcrumbs from '~/components/Breadcrumbs.vue'
  import '~/styles/main.less'

  export default {
    created: function() {
      this.$store.commit('updateProductIndex', 'i-Buzz');

    },
    components: {
      Header,
      Footer,
      Breadcrumbs,
      Form
    },
    props: ['productIndex', 'serviceIndex'],
    data() {
      return {
        currentProductIndex: 0,
        currentServiceIndex: 0
      }
    },
    middleware: 'product404'
  }

</script>
