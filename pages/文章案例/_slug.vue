<template>
  <div>
    <div class="section" id="blogPostCover" :style="{ backgroundImage: 'url(' + single.feature_image + ')' }">
    </div>
    <div class="section" id="blogContent">
      <div class="wrapper">
        <div class="blogTitle">
          <span class="tag primaryTag mb-4">{{ single.primary_tag.name }}</span>
          <h1 class="mb-1">{{ single.title }}</h1>
          <p class="mb-5 small">發佈時間：{{ single.published_at }}</p>
        </div>
        <div v-html="single.html"></div>
        <hr>
        <div class="row mb-3 aling-items-top">
          <div class="col-auto aling-items-center">
            <div class="fb-share-button" :data-href="'https://i-buzz.herokuapp.com/文章案例/' + single.slug" data-layout="button_count" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
          </div>
          <div class="col-auto aling-items-center">
            <div class="line-it-button" data-lang="en" data-type="share-a" data-ver="3" data-url="https://i-buzz.herokuapp.com/文章案例/" data-color="default" data-size="small" data-count="true" style="display: none;"></div>
            <script src="https://d.line-scdn.net/r/web/social-plugin/js/thirdparty/loader.min.js" async="async" defer="defer"></script>
          </div>
        </div>
        <div class="row aling-items-center">
          <div class="col-auto">
            <h5>關鍵字：</h5>
          </div>
          <div class="col">
            <h5>
              <span v-for="tag in single.tags">
                <nuxt-link :to="'/文章案例/tag/' + tag.slug"><span class="badge badge-pill badge-secondary">{{ tag.name }}</span></nuxt-link>
              </span>
            </h5>
          </div>
        </div>
        <div class="row">
          <div class="fb-comments" :data-href="'https://i-buzz.herokuapp.com/文章案例/' + single.slug" data-numposts="5" data-width="100%"></div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="wrapper">
        <h3>相關文章</h3>
        <div class="row mb-5">
          <div class="col-sm-4 mb-3" v-for="post in posts">
            <section>
              <a :href="'/文章案例/' + post.slug" class="postThumbnail">
                <img :src="post.feature_image">
              </a>
              <h6 class="mb-0 mt-2 mb-1">{{ post.title }}</h6>
              <span v-for="tag in post.tags" class="mr-1">
                <nuxt-link :to="'/文章案例/tag/' + tag.slug"><span class="badge badge-pill badge-secondary">{{ tag.name }}</span></nuxt-link>
              </span>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    getSinglePost,
    getRelatedPosts
  } from '@/api/posts';
  export default {
    created: function() {
      this.$store.commit('updateProductIndex', '文章案例')
    },
    async asyncData({
      params
    }) {
      const single = await getSinglePost(params.slug);
      const posts = await getRelatedPosts(single);
      return {
        single: single,
        posts: posts
      }
    },
    methods: {
      formatDate(date) {
        return
        date
      }
    }
  }

</script>
