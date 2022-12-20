<template>
    <div class="rounded border border-gray-100 p-4 blog-listing__filters">
        <div class="blog-listing__filters-title">
            <h3 v-if="label"
                class="text-lg font-bold"
                v-html="label" />
        </div>
        <div v-if="typeof taxonomies === 'object' && !objIsEmpty(taxonomies)"
             class="flex max-h-60 overflow-y-scroll py-4 mb-4 blog-listing__filters-terms">
            <div>
                <CategoryItem v-for="({id, name, slug}) in taxonomies"
                              :key="id"
                              :id="id"
                              :name="name"
                              :slug="slug" />
            </div>
        </div>
        
        <div class="pb-4 mb-4 blog-listing__filters-search">
            <div>
                <label for="blog-search"
                       class="form-label inline-block mb-2 text-white"
                       v-html="searchLabel"/>
                <input type="text"
                       v-model="searchInput"
                       class="form-control block w-full px-3 py-1.5 text-base font-normal caret-yellow-500 text-gray-700 bg-white bg-clip-padding border-solid border-2 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-yellow-500 focus:outline-none focus:shadow-none"
                       id="blog-search"
                       :placeholder="searchPlaceholder" />
            </div>
        </div>
        
        <div class="pb-2 blog-listing__filters-submit">
            <button class="group flex items-center justify-between rounded-lg border border-gray-100 px-5 py-3 transition-colors hover:border-yellow-500 hover:bg-yellow-500 focus:outline-none focus:ring"
                    type="submit"
                    @click="submitSearch"
                    @keydown.enter.prevent="submitSearch">
                <span class="font-medium text-white transition-colors group-hover:text-gray-900 group-active:text-gray-900"
                      v-html="submit"/>
            </button>
        </div>
    </div>
</template>

<script type="application/javascript">
    import {store} from "../../Vuex/blog/store";
    import mixins from "../../Util/mixins";
    import CategoryItem from "./Components/CategoryItem.vue";
    
    export default {
        props: {},
        data: () => ({
            searchInput: '',
        }),
        beforeCreate() {},
        created() {},
        beforeMount() {},
        mounted() {},
        methods: {
            submitSearch() {
                const search = this.searchInput;
                store.commit('updateState', {search})
                store.dispatch('getBlogPosts');
            }
        },
        components: {CategoryItem},
        computed: {
            label() {return store.state.filterLabel},
            searchLabel() {return store.state.searchLabel},
            searchPlaceholder() {return store.state.searchPlaceholder},
            submit() {return store.state.filterSubmit},
            taxonomies() {return store.state.taxonomies},
        },
        watch: {},
        mixins: [mixins],
        name: "BlogFilters"
    }
</script>

<style scoped lang="scss">

</style>
