<template>
    <div class="form-check"
         @click="addToSelected">
        <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-yellow-500 checked:border-yellow-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
               type="checkbox"
               value=""
               :id="slug" />
        <label class="form-check-label inline-block text-white"
               :for="slug"
               v-html="name"
               @click="addToSelected" />
    </div>
</template>

<script type="application/javascript">
    import {store} from "../../../Vuex/blog/store";
    import mixins from "../../../Util/mixins";
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
