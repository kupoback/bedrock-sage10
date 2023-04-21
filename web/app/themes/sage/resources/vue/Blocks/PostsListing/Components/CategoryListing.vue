<template>
    <div :class="categoryClass">
        <CategoryItem v-for="({id, name, slug}) in taxonomies"
                      :key="id"
                      :id="id"
                      :name="name"
                      :slug="slug" />
    </div>
</template>

<script type="application/javascript">
    import CategoryItem from "./CategoryItem.vue";
    
    export default {
        props: {
            categoryClass: {
                type: String,
                default: '',
            },
            taxonomies: {
                type: [Array, Object],
                default: [],
            }
        },
        data: () => ({}),
        beforeCreate() {
        },
        created() {
        },
        beforeMount() {
        },
        mounted() {
        },
        methods: {},
        components: {CategoryItem},
        computed: {},
        watch: {},
        name: "CategoryListing"
    }
</script>

<style scoped lang="scss">

</style>
