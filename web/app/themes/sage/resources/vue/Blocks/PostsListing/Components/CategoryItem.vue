<template>
    <div class=""
         @click="addToSelected">
        <input class=""
               type="checkbox"
               value=""
               :id="slug" />
        <label class=""
               :for="slug"
               v-html="name"
               @click="addToSelected" />
    </div>
</template>

<script type="application/javascript">
    import {store} from "@vuexPosts/store";
    import mixins from "@vueUtil/mixins";

    export default {
        props: {
            id: {
                type: [Number, String],
                default: null,
            },
            name: {
                type: String,
                default: null,
            },
            slug: {
                type: String,
                default: null,
            },
        },
        data: () => ({}),
        beforeCreate() {},
        created() {},
        beforeMount() {},
        mounted() {},
        methods: {
            addToSelected() {
                store.commit('updateState',
                    {selectedCategories: this.addRemoveTerm(this.selectedCategories, this.id)})
            },
        },
        components: {},
        computed: {
            selectedCategories() {return store.state.selectedCategories},
        },
        watch: {},
        mixins: [mixins],
        name: "CategoryItem"
    }
</script>

<style scoped lang="scss">

</style>
