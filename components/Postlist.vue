<template>
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
</template>
