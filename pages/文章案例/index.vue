<template>
  <div>
    <div class="section dark" id="banner">
      <div class="wrapper">
        <div class="row align-items-center">
          <div class="col-lg-4">
            <h1 class="title">
              i-Buzz 文章案例
            </h1>
            <h4>業界最前線的文章匯集！</h4>
          </div>
          <div class="col-lg-8">
            <img src="/assets/images/img_0-home-6.png">
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="wrapper">

        <div class="row" sticky-container>
          <div class="col-7">
           <h3>知識文章</h3>
            <div class="row mb-5">
              <div class="col-sm-6 mb-2" v-for="post in posts">
                <section>
                 <nuxt-link :to="{ path: '/文章案例/' + post.slug }">
                    <img :src="post.feature_image">
                  </nuxt-link>
                  <p class="mb-0">{{ post.title }}</p>
                  <span v-for="tag in post.tags">
                    <nuxt-link :to="{ path: '文章案例/tag/' + tag.slug }">{{ tag.name }}</nuxt-link>
                  </span>
                </section>
              </div>
            </div>
            <h3>情報文章</h3>
            <div class="row">
              <div class="col-sm-6 mb-2" v-for="post in posts">
                <section>
                 <nuxt-link :to="{ path: '/文章案例/' + post.slug }">
                    <img :src="post.feature_image">
                  </nuxt-link>
                  <p class="mb-0">{{ post.title }}</p>
                  <span v-for="tag in post.tags">
                    <nuxt-link :to="{ path: '文章案例/tag/' + tag.slug }">{{ tag.name }}</nuxt-link>
                  </span>
                </section>
              </div>
            </div>
          </div>
          <div class="col-5">
           <div v-sticky>
             <h3>最新發布</h3>
              <div class="row mb-2" v-for="post in posts">
                <div class="col-3">
                 <nuxt-link :to="{ path: '/文章案例/' + post.slug }">
                  <img :src="post.feature_image">
                  </nuxt-link>
                </div>
                <div class="col-auto">
                  <p class="mb-0">{{ post.title }}</p>
                  <span v-for="tag in post.tags">
                    <nuxt-link :to="{ path: '文章案例/tag/' + tag.slug }">{{ tag.name }}</nuxt-link>
                  </span>
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
import { getPosts } from '@/api/posts';
export default {
  created: function () {
    this.$store.commit('updateProductIndex', '文章案例')
  },
  async asyncData () {
      const posts = await getPosts();
      return { posts: posts }
    }
}
</script>
