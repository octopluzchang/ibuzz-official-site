<template>
  <div>
   <div class="section dark" id="banner">
      <div class="wrapper">
       <nuxt-link to="/文章案例">
             <h4>文章案例/</h4>
              </nuxt-link>
        <div class="row align-items-center">
          <div class="col-lg-4">
            <h1>{{tag.name}}</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="wrapper">
        <div class="row">
          <div class="col-4" v-for="post in posts">
            <section class="blog-post" >
             <nuxt-link :to="{ path: '/文章案例/' + post.slug }">
                <img :src="post.feature_image">
              </nuxt-link>
              <nuxt-link :to="{ path: '/文章案例/' + post.slug }">
                <p>{{ post.title }}</p>
              </nuxt-link>
              <span v-for="tag in post.tags">
                <nuxt-link :to="{ path: '文章案例/tag/' + tag.slug }">{{ tag.name }}</nuxt-link>
              </span>
            </section>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="wrapper">
        <div class="row">
            <div class="pagination">
                <div class="prev">
                    <nuxt-link :to="prevLink">Newer posts</nuxt-link>
                </div>
                <div class="next">
                    <nuxt-link :to="nextLink">Older posts</nuxt-link>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getTags, getPostsArchive, getPostsPage } from '@/api/posts';

export default {
  created: function () {
    this.$store.commit('updateProductIndex', '文章案例')
  },
  async asyncData ({ params }) {
      const tag = await getTags(params.slug);
      const raw = await getPostsArchive(params.slug);
      const posts = await getPostsPage( raw.meta.pagination.page );
      let nextPage = 1
      
      console.log(raw.meta.pagination)
      return { tag: tag, raw:raw, posts: posts}
    },

  computed: {
        prevLink() {
            return this.baseUrl + 'page/' + 1
        },
        nextLink() {
            return this.baseUrl + 'page/' + 2
        }
    }
}
</script>
