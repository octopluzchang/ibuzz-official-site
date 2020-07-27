<template>
  <div id="layout">
    <div sticky-container>
      <Header/>
      <nuxt id="main"/>
    </div>
    <Footer/>
    <Form id="contactForm" v-show="$store.state.showForm"/>
  </div>
</template>

<script>
  import Header from '~/components/Header.vue'
  import Footer from '~/components/Footer.vue'
  import Form from '~/components/Form.vue'
  import Breadcrumbs from '~/components/Breadcrumbs.vue'
  import '~/styles/main.less'

  export default {
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
  }
</script>
