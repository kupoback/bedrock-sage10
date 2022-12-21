<template>
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
</template>

<script type="application/javascript">
    /**
     * Vue Scripts
     */
    import {store} from "../../Vuex/blog/store";

    /**
     * Vue Components
     */
    import Pagination from "../../Components/Pagination/Pagination.vue";
    
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
                store.dispatch('getBlogPosts')
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
        name: "BlogPagination"
    }
</script>

<style scoped lang="scss">

</style>
