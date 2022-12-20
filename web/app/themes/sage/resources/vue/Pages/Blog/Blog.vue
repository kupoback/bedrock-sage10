<template>
    <div class="blog-listing__results">
        <div class="blog-listing__results-posts">
            <Post v-if="!loading && posts.length"
                  v-for="({author, categories, date, excerpt, id, image, permalink, sticky, title}) in posts"
                  :key="id"
                  :author="author"
                  :categories="categories"
                  :date="date"
                  :excerpt="excerpt"
                  :first-item="id === posts[0]?.id"
                  :image="image"
                  :last-item="id === posts.findLast(x => true)?.id"
                  :permalink="permalink"
                  :sticky="sticky"
                  :title="title" />
            
            <NoResults v-if="!loading && !posts.length"
                       noResultsText="noResults" />
            
            <Loading v-if="loading"
                     white />
        </div>
        <Pagination
            v-if="maxPages > 0"
            :clickHandler="goToPage"
            :pageCount="maxPages"
            :forcePage="page"
            navClass="my-10 blog-listing__results-pagination"
            containerClass="flex justify-center gap-1 text-xs font-medium"
            prevBtnClass="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 hover:border-yellow-500 hover:bg-yellow-500 hover:text-gray-900"
            nextBtnClass="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 hover:border-yellow-500 hover:bg-yellow-500 hover:text-gray-900"
            pageLinkClass="block h-8 w-8 rounded border border-gray-100 text-center leading-8 hover:border-yellow-500 hover:bg-yellow-500 hover:text-gray-900"
            pageDisabledClass="border-yellow-400 bg-yellow-400 text-gray-900 hover:border-yellow-400 hover:bg-yellow-400"
            breakViewLinkClass="hover:border-gray-100 hover:bg-transparent hover:text-gray-100" />
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
        data: () => ({
            resultsCountElm: document.getElementById('results-count')
        }),
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
            resultsLabel() {return store.state.resultsLabel},
            total() {return store.state.total},
        },
        watch: {
            total(newVal) {
                if (this.resultsCountElm) this.resultsCountElm.innerText = `: ${newVal}`;
            }
        },
        name: "Blog"
    }
</script>

<style scoped lang="scss">

</style>
