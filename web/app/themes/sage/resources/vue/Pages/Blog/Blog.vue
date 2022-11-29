<template>
    <div class="mx-auto my-16 blog-listing__posts">
        <Post v-if="!loading && posts.length"
              v-for="({author, categories, date, excerpt, id, image, permalink, sticky, title}) in posts"
              :key="id"
              :author="author"
              :categories="categories"
              :date="date"
              :excerpt="excerpt"
              :image="image"
              :permalink="permalink"
              :sticky="sticky"
              :title="title" />
        
        <NoResults v-if="!loading && !posts.length"
                   noResultsText="noResults" />
        
        <Loading v-if="loading" white />
    </div>
</template>

<script type="application/javascript">
    import Post from "./Components/Post";
    import NoResults from "../../Components/NoResults";
    import Loading from "../../Components/Loading";
    export default {
        props: {},
        data: () => ({}),
        created() {
            this.$store.dispatch('getBlogPosts');
        },
        mounted() {},
        methods: {},
        components: {Loading, NoResults, Post},
        computed: {
            loading() {return this.$store.state.loading},
            maxPages() {return this.$store.state.maxPages},
            noResults() {return this.$store.state.noResults},
            page() {return this.$store.state.page},
            posts() {return this.$store.state.posts},
        },
        watch: {},
        name: "Blog"
    }
</script>

<style scoped lang="scss">

</style>
