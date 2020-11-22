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
          <div class="col-sm-4 mb-3" v-for="post in posts">
                <section>
                 <a :href="'/文章案例/' + post.slug" class="postThumbnail">
                    <img :src="post.feature_image">
                  </a>
                  <h6 class="mb-0 mt-2 mb-1">{{ post.title }}</h6>
                  <span v-for="tag in post.tags" class="mr-1">
                    <a :href="'/文章案例/tag/' + tag.slug"><span class="badge badge-pill badge-secondary">{{ tag.name }}</span></a>
                  </span>
                </section>
              </div>
        </div>
      </div>
    </div>
<!--
    <div class="section">
      <div class="wrapper">
        <div class="row">
            <div class="pagination">
                <div class="prev" @click="prevLink">
                    Newer posts
                </div>
                <div class="next" @click="nextLink">
                    Older posts
                </div>
            </div>
        </div>
      </div>
    </div>
-->
  </div>
</template>
<script>
import { getTags, getPostsArchive } from '@/api/posts';

export default {
  created: function () {
    this.$store.commit('updateProductIndex', '文章案例')
  },
  async asyncData ({ params, store }) {
      const tag = await getTags(params.slug);
      const posts = await getPostsArchive(params.slug);
      await store.dispatch('getPostsIndex', '1', params.slug);
      console.log(store.state.postsIndex)
      return { tag: tag,  posts: posts}
    },
    data() {
        return {
            posts: []
        }
    },
  methods: {
        prevLink() {
            this.$store.dispatch('getPostsIndex', '1')
        },
        async nextLink() {
         this.$store.dispatch('getPostsIndex', '10')
            const posts = await this.$store.state.postsIndex
            console.log(this.$store.state.postsIndex.meta)

        }
    }
}
</script>
