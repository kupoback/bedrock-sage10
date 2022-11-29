<template>
    <div class="mx-auto my-16 blog-listing__posts">
        <Post v-if="!loading && posts.length"
              v-for="({author, categories, date, excerpt, id, image, permalink, sticky, title}, index) in posts"
              :key="id"
              :author="author"
              :categories="categories"
              :date="date"
              :excerpt="excerpt"
              :image="image"
              :last-item="id === posts.findLast(x => true)?.id"
              :permalink="permalink"
              :sticky="sticky"
              :title="title" />
        
        <NoResults v-if="!loading && !posts.length"
                   noResultsText="noResults" />
        
        <Loading v-if="loading" white />
    </div>
</template>

<script type="application/javascript">
    import {store} from "../../Vuex/blog/store";
    
    import Post from "./Components/Post";
    import NoResults from "../../Components/NoResults";
    import Loading from "../../Components/Loading";
    export default {
        props: {},
        data: () => ({}),
        created() {
            store.dispatch('getBlogPosts');
        },
        mounted() {},
        methods: {},
        components: {Loading, NoResults, Post},
        computed: {
            loading() {return store.state.loading},
            maxPages() {return store.state.maxPages},
            noResults() {return store.state.noResults},
            page() {return store.state.page},
            posts() {return store.state.posts},
        },
        watch: {},
        name: "Blog"
    }
</script>

<style scoped lang="scss">

</style>
