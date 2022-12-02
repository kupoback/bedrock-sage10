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
        
        <Pagination
            v-if="maxPages > 0"
            :clickHandler="goToPage"
            :pageCount="maxPages"
            :forcePage="page"
            firstLastButton>
        </Pagination>
        
    </div>
</template>

<script type="application/javascript">
    /**
     * Vue Scripts
     */
    import {store} from "../../Vuex/blog/store";

    /**
     * Vue Components
     */
    import Loading from "../../Components/Loading";
    import NoResults from "../../Components/NoResults";
    import Pagination from "../../Components/Pagination/Pagination";
    import Post from "./Components/Post";
    
    export default {
        props: {},
        data: () => ({}),
        created() {
            store.dispatch('getBlogPosts');
        },
        mounted() {},
        methods: {
            goToPage(page) {
                this.updatePage(page);
                store.dispatch('getBlogPosts')
            },
            updatePage(page) {
                store.commit('updateState', {page})
            }
        },
        components: {Loading, NoResults, Pagination, Post},
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
