import GhostContentAPI from '@tryghost/content-api'

const api = new GhostContentAPI({
    url: 'https://ibuzz-articles.herokuapp.com',
    key: 'b08c9a6aec1eae4eebd83fb5dd',
    version: "v3"
});

//全部文章
export async function getPosts() {
    return await api.posts
        .browse({
            limit: 4,
            include: 'tags'

        })
        .catch(err => {
            console.error(err);
        });
}

//知識文章
export async function getPostsKnowledge() {
    return await api.posts
        .browse({
            limit: 4,
            include: 'tags',
            filter: 'tag: knowledge'

        })
        .catch(err => {
            console.error(err);
        });
}

//情報文章
export async function getPostsNews() {
    return await api.posts
        .browse({
            limit: 4,
            include: 'tags',
            filter: 'tag: news'
        })
        .catch(err => {
            console.error(err);
        });
}

//最新發布
export async function getPostsLatest() {
    return await api.posts
        .browse({
            limit: 8,
            include: 'tags',
        })
        .catch(err => {
            console.error(err);
        });
}


//相關文章
export async function getRelatedPosts(single) {
    return await api.posts
        .browse({
            limit: 3,
            include: 'tags',
            filter: 'tag:' + single.primary_tag.slug + '+slug:-' + single.slug
        })
        .catch(err => {
            console.error(err);
        });
}

export async function getSinglePost(postSlug) {
    return await api.posts
        .read({
            slug: postSlug,
            include: 'tags'
        })
        .catch(err => {
            console.error(err);
        });
}

export async function getTags(tagSlug) {
    return await api.tags
        .read({
            slug: tagSlug
        })
        .catch(err => {
            console.error(err);
        });
}

export async function getPostsArchive(tagSlug) {
    return await api.posts
        .browse({
            limit: 'all',
            include: 'tags',
            filter: 'tag:' + tagSlug,
        })
        .catch(err => {
            console.error(err);
        });
}

export async function getPostsPage(pagination) {
    return await api.posts
        .browse({
            limit: 2,
            page: pagination,
            order: 'featured DESC, published_at DESC'
        })
        .catch(err => {
            console.error(err);
        });
}
