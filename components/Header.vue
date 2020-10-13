<template>
  <div>
    <div class="header">
      <div class="row align-items-center">
        <div class="col-auto">
        <h4 class="mr-0">
          <nuxt-link to="/" id="logo">i-Buzz</nuxt-link>
        </h4>
        </div>
        <div class="headerNavContainer desktopOnly col">
          <nuxt-link :to="'/' + product.name" class="headerNavItem" v-for="(product, productIndex) in $store.state.products" v-if="product.services.length">{{product.name}}</nuxt-link>
        </div>
        <a href="javascript:;" class="button main align-self-right" @click="$store.commit('toggleForm')">聯絡我們</a>
      </div>
    </div>
    <div class="navBar" v-if="$store.state.selectedProduct != 0">
      <div class="wrapper desktopOnly">
        <div class="row align-items-center">
          <div class="col-auto">
           <nuxt-link :to="'/' + $store.state.products[$store.state.selectedProduct].name">
            <b>{{$store.state.products[$store.state.selectedProduct].name}}</b>
            </nuxt-link>
          </div>
          <div class="col">
            <div class="row align-items-center justify-content-end">
              <div class="navItem" v-for="(service, serviceIndex) in $store.state.products[$store.state.selectedProduct].services" @click="$store.commit('getServiceIndex', serviceIndex)">
                <nuxt-link :to="'/' + $store.state.products[$store.state.selectedProduct].name +'/' + service.title">{{service.title}}<span class="icon ic_dropdown small" v-show="service.childMenu"></span>
                </nuxt-link>
                <div class="navMenu" v-show="service.childMenu">
                  <ul class="list links">
                    <nuxt-link :to="'/' + $store.state.products[$store.state.selectedProduct].name +'/' + service.title + '/' + feature.title" v-for="(feature,featureIndex) in service.features" @click.native="$store.commit('getFeatureIndex', featureIndex)">
                      <li>
                        {{feature.title}}
                      </li>
                    </nuxt-link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper mobileOnly" v-sticky>
        <div class="row align-items-center">
          <div class="col-auto">
           <nuxt-link :to="'/' + this.$route.params.products">
            <b>{{this.$route.params.products}}</b>
            </nuxt-link>
          </div>
          <div class="col">

            <div>
             <div class="row align-items-center justify-content-end">
               <a href="javascript:;" class="button main" @click="$store.commit('toggleForm')">聯絡我們</a>
                <span class="icon ic_menu" v-show="!showMenu" @click="showMenu = !showMenu"></span>
                <span class="icon ic_close" v-show="showMenu" @click="showMenu = !showMenu"></span>


                <div id="mobileNavMenu" class="text-left" v-show="showMenu">
                  <div class="row align-items-center">
                    <div class="col">
                      <h4 class="mr-0">
                        <select>
                          <option v-for="(product, productIndex) in $store.state.products">
                            {{product.name}}
                          </option>
                        </select>
                      </h4>
                    </div>
                    <div class="col text-right">
                      <span class="icon ic_close" v-show="showMenu" @click="showMenu = false"></span>
                    </div>

                  </div>
                  <hr>
                  <div v-for="(service, serviceIndex) in $store.state.products[0].services">
                    <ul class="list links">
                      <nuxt-link :to="'/' + $store.state.products[$store.state.selectedProduct].name +'/' + service.title">
                        <li>
                          <h6>{{service.title}}</h6>
                        </li>
                      </nuxt-link>
                    </ul>

                    <ul class="list links row" @click="showMenu = false">
                      <nuxt-link :to="'/' + $store.state.products[$store.state.selectedProduct].name +'/' + service.title + '/' + feature.title" v-for="(feature,featureIndex) in service.features" @click.native="$store.commit('getFeatureIndex', featureIndex)">
                      <li>
                        {{feature.title}}
                      </li>
                    </nuxt-link>
                    </ul>
                    <hr>
                  </div>
                </div>
             </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['currentProductIndex', 'currentServiceIndex'],
    data() {
      return {
        showMenu: false
      }
    },
    methods: {
    },
  }
</script>
