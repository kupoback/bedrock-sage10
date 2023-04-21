<template>
    <Pagination
        v-if="maxPages > 0"
        :clickHandler="goToPage"
        :pageCount="maxPages"
        :forcePage="page"
        navClass="posts-listing__results-pagination"
        containerClass=""
        prevBtnClass=""
        nextBtnClass=""
        pageLinkClass=""
        pageDisabledClass=""
        breakViewLinkClass=""/>
</template>

<script type="application/javascript">
    /**
     * Vue Scripts
     */
    import {store} from "@vuexPosts/store";

    /**
     * Vue Components
     */
    import Pagination from "@vueComponents/Pagination/Pagination.vue";

    export default {
        props: {},
        data: () => ({}),
        beforeCreate() {
        },
        created() {
        },
        beforeMount() {
        },
        mounted() {
        },
        methods: {
            goToPage(page) {
                this.updatePage(page);
                store.dispatch('getPosts')
            },
            updatePage(page) {
                store.commit('updateState', {page})
            }
        },
        components: {Pagination},
        computed: {
            loading() {return store.state.loading},
            maxPages() {return store.state.maxPages},
            page() {return store.state.page},
        },
        watch: {},
        name: "PostPagination"
    }
</script>

<style scoped lang="scss">

</style>
