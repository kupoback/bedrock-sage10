<template>
    <div class="posts-listing__filters">
        <div class="posts-listing__filters-title">
            <h3 v-if="label"
                class=""
                v-html="label" />
        </div>
        <div v-if="typeof taxonomies === 'object' && !objIsEmpty(taxonomies)"
             class="posts-listing__filters-terms">
            <CategoryListing :taxonomies="taxonomies" />
        </div>

        <div class="posts-listing__filters-search">
            <InputField inputId="posts-search"
                        inputClass=""
                        :label="searchLabel"
                        labelClass=""
                        :placeholder="searchPlaceholder"
                        @inputEmit="getSearchText" />
        </div>

        <div class="posts-listing__filters-submit">
            <Button btnClass=""
                    btnType="submit"
                    @btnAction="submitSearch">
                <template #btnContent>
                    <span class=""
                          v-html="submit"/>
                </template>
            </Button>
        </div>
    </div>
</template>

<script type="application/javascript">
    /**
     * Vue Scripts
     */
    import {store} from "@vuexPosts/store";
    import mixins from "@vueUtil/mixins";

    /**
     * Vue Components
     */
    import Button from "@vueComponents/Button.vue";
    import CategoryListing from "./Components/CategoryListing.vue";
    import InputField from "@vueComponents/Form/InputField.vue";

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
            getSearchText(searchValue) {
                store.commit('updateState', {search: searchValue});
            },
            submitSearch() {
                // const search = this.searchInput;
                // console.log(search)
                // store.commit('updateState', {search})
                store.dispatch('getPosts');
            }
        },
        components: {Button, CategoryListing, InputField},
        computed: {
            label() {return store.state.filterLabel},
            searchLabel() {return store.state.searchLabel},
            searchPlaceholder() {return store.state.searchPlaceholder},
            submit() {return store.state.filterSubmit},
            taxonomies() {return store.state.taxonomies},
        },
        watch: {},
        mixins: [mixins],
        name: "PostFilters"
    }
</script>

<style scoped lang="scss">

</style>
