import GhostContentAPI from '@tryghost/content-api'

const api = new GhostContentAPI({
    url: 'http://localhost:2368',
    key: '7cec24c1ffce4b6f3b02d6cb9c',
    version: "v2"
});

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

//export async function getPostsIndex({commit}, pagination) {
//    return await api.posts
//        .browse({
//            limit: postsPerPage,
//            page: pagination.pageNumber,
//            include: 'tags,authors',
//            filter: pagination.filter,
//            order: 'featured DESC, published_at DESC'
//        })
//}
