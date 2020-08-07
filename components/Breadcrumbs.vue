<template>
  <div>
    <div class="row breadcrumbs mr-2 align-items-center">
         <nuxt-link :to="'/' + $store.state.products[$store.state.selectedProduct].name + '/' + $store.state.products[$store.state.selectedProduct].services[$store.state.selectedService].title">{{$store.state.products[$store.state.selectedProduct].name}} </nuxt-link>
         <div class="icon ic_next small"></div>
         <h5 class="mr-0">{{this.$route.params.features}}</h5>
       </div>
  </div>
</template>
