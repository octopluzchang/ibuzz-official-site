<template>
    <div>
        <div class="section dark pt-3" id="banner">
            <div class="wrapper">
                <div class="row align-items-center">
                    <div class="col-lg-4">
                        <h1 class="title">
                            i-Buzz 文章案例
                        </h1>
                        <h4>業界最前線的文章匯集！</h4>
                    </div>
                    <div class="col-lg-8">
                        <img src="/assets/images/img_3-home.png">
                    </div>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="wrapper">

                <div class="row" sticky-container>
                    <div class="col-sm-7">

                        <div class="row align-items-center mb-3">
                            <div class="col-auto">
                                <h3 class="mb-0">知識文章</h3>
                            </div>
                            <div class="col text-right">
                                <nuxt-link to="/文章案例/tag/knowledge">查看更多</nuxt-link>
                            </div>
                        </div>
                        <div class="row mb-5">
                            <div class="col-sm-6 mb-3" v-for="post in posts_knowledge">
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
                        <div class="row align-items-center mb-3">
                            <div class="col-auto">
                                <h3 class="mb-0">情報文章</h3>
                            </div>
                            <div class="col text-right">
                                <a :href="'/文章案例/tag/news'">查看更多</a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6 mb-3" v-for="post in posts_news">
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
                    <div class="col-sm-5">
                        <div v-sticky>
                            <h3>最新發布</h3>
                            <div class="row mb-2 align-items-center" v-for="post in latest_posts">
                                <div class="col-4">
                                    <a :href="'/文章案例/' + post.slug" class="postThumbnail">
                                        <img :src="post.feature_image">
                                    </a>
                                </div>
                                <div class="col-8">
                                    <h6 class="mb-1">{{ post.title }}</h6>
                                    <span v-for="tag in post.tags" class="mr-1">
                                        <a :href="'/文章案例/tag/' + tag.slug"><span class="badge badge-pill badge-secondary">{{ tag.name }}</span></a>
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
    import {
        getPosts,
        getPostsKnowledge,
        getPostsNews,
        getPostsLatest
    } from '@/api/posts';
    export default {
        created: function() {
            this.$store.commit('updateProductIndex', '文章案例')
        },
        async asyncData() {
            const posts_knowledge = await getPostsKnowledge();
            const posts_news = await getPostsNews();
            const latest_posts = await getPostsLatest();
            return {
                posts_knowledge: posts_knowledge,
                posts_news: posts_news,
                latest_posts: latest_posts
            }
        }
    }

</script>
