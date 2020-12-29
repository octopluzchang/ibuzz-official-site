<template>
  <div>
    <div class="row breadcrumbs mr-2 align-items-center">
      <div class="col-auto pr-0">
         <h5>
          <nuxt-link :to="'/' + $store.state.products[$store.state.selectedProduct].name + '/' + $store.state.products[$store.state.selectedProduct].services[$store.state.selectedService].title">{{$store.state.products[$store.state.selectedProduct].services[$store.state.selectedService].title}} </nuxt-link>
         </h5>
      </div>
      <div class="col-auto p-0">
         <div class="icon ic_next small align-self-center"></div>
      </div>
      <div class="col-auto pl-0">
         <h5 class="mr-0">{{this.$route.params.features}}</h5>
      </div>
      
    </div>
  </div>
</template>
