<template>
    <article class=""
             :class="{
                'post': sticky,
                '': !lastItem && !firstItem,
                '': firstItem,
                '': !lastItem,
             }">
        <div class="post__postmeta">
            <time v-if="!objIsEmpty(date)"
                  :datetime="date?.raw"
                  class="post__postmeta-time">
                <span v-if="objHasKey(date, 'year')"
                      v-html="date.year"/>
                <span class="post__postmeta-separator separator"></span>
                <span v-if="objHasKey(date, 'date')"
                      class="post__postmeta-date"
                      v-html="date.date"/>
            </time>
        </div>

        <div v-if="!objIsEmpty(image)"
             class="post__image">
            <PostImage :image="image"
                       class=""/>
        </div>

        <div class="post__body">
            <div class="post__body-title">
                <h3 class="post__body-title__header">
                    <a :href="permalink"
                       v-html="title" />
                </h3>

                <p v-if="excerpt"
                   class="post__body-content"
                   v-html="excerpt"/>
            </div>

            <div class="post__body-footer">
                <a :href="permalink"
                   class=""
                   v-html="readMore"
                />
            </div>
        </div>
    </article>
</template>

<script type="application/javascript">
    import {store} from "@vuexPosts/store";
    import mixins from "@vueUtil/mixins";

    import PostImage from "@vueComponents/ImgSrcSet.vue";

    export default {
        props: {
            author: {
                type: String,
                default: false,
            },
            categories: {
                type: String,
                default: false,
            },
            date: {
                type: [Array, Object],
                default: [],
            },
            excerpt: {
                type: String,
                default: false,
            },
            firstItem: {
                type: Boolean,
                default: true,
            },
            image: {
                type: [Array, Object],
                default: [],
            },
            lastItem: {
                type: Boolean,
                default: true,
            },
            permalink: {
                type: String,
                default: false,
            },
            sticky: {
                type: Boolean,
                default: false,
            },
            title: {
                type: String,
                default: false,
            },
        },
        data: () => ({}),
        beforeCreate() {
        },
        created() {
        },
        beforeMount() {
        },
        mounted() {
        },
        methods: {},
        components: {PostImage},
        computed: {
            readMore() {
                return store.state.labels?.view_more || 'Read More'
            },
        },
        watch: {},
        mixins: [mixins],
        name: "Post"
    }
</script>

<style scoped lang="scss">

</style>
