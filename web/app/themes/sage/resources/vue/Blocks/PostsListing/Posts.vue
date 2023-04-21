<template>
    <div class="posts-listing__results">
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
              :title="title"/>

        <NoResults v-if="!loading && !posts.length"
                   :noResultsText="noResults"/>

        <Loading v-if="loading"
                 white/>
    </div>
</template>

<script type="application/javascript">
    /**
     * Vue Scripts
     */
    import {store} from "@vuexPosts/store";

    /**
     * Vue Components
     */
    import Loading from "@vueComponents/Loading";
    import NoResults from "@vueComponents/NoResults";
    import Post from "./Components/Post";

    export default {
        props: {},
        data: () => ({
            resultsCountElm: document.getElementById('results-count')
        }),
        created() {
            store.dispatch('getPosts');
        },
        beforeMount() {
        },
        mounted() {
        },
        methods: {},
        components: {Loading, NoResults, Post},
        computed: {
            loading() {
                return store.state.loading
            },
            noResults() {
                return store.state.noResults
            },
            posts() {
                return store.state.posts
            },
            resultsLabel() {
                return store.state.resultsLabel
            },
            total() {
                return store.state.total
            },
        },
        watch: {
            total(newVal) {
                if (this.resultsCountElm) this.resultsCountElm.innerText = `: ${newVal}`;
            }
        },
        name: "PostListing"
    }
</script>

<style scoped lang="scss">

</style>
