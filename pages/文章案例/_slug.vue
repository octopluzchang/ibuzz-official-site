<template>
  <div>
   <div class="section" id="banner" :style="{ backgroundImage: 'url(' + single.feature_image + ')' }">
   </div>
    <div class="section">
      <div class="wrapper">
        <h1>{{ single.title }}</h1>
        <div v-html="single.html"></div>
      </div>
    </div>
    <div class="section">
      <div class="wrapper">
        <div class="row">
            <div class="col-auto">
              分享：
            </div>
            <div class="col">
            </div>
          </div>
          <div class="row">
            <div class="col-auto">
              關鍵字：
            </div>
            <div class="col">
              <span v-for="tag in single.tags">
                  <nuxt-link :to="{ path: '/文章案例/tag/' + tag.slug }">{{ tag.name }}</nuxt-link>
              </span>
            </div>
          </div>
      </div>
    </div>
    <div class="section">
      <div class="wrapper">
        <h3>相關文章</h3>
            <div class="row mb-5">
              <div class="col-sm-4" v-for="post in posts">
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
    </div>
  </div>
</template>
<script>
import { getSinglePost, getRelatedPosts } from '@/api/posts';
export default {
  created: function () {
    this.$store.commit('updateProductIndex', '文章案例')
  },
  async asyncData ({ params }) {
      const single = await getSinglePost(params.slug);
      const posts = await getRelatedPosts(single);
      return { single: single, posts: posts }
    }
}
</script>
