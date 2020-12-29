<template>
  <div class="mb-4">
    <h6 class="highlighted">{{this.$route.params.services}}</h6>
    <ul class="list links">

        <nuxt-link :to="'/' + $store.state.products[$store.state.selectedProduct].name + '/' + $store.state.products[$store.state.selectedProduct].services[$store.state.selectedService].title + '/' + feature.title" @click.native="$store.commit('getFeatureIndex', featureIndex)" v-for="(feature,featureIndex) in $store.state.products[$store.state.selectedProduct].services[$store.state.selectedService].features">
        <li class="mb-0">{{feature.title}}</li>


        </nuxt-link>
    </ul>
  </div>
</template>
<script>
export default {

  }
</script>
