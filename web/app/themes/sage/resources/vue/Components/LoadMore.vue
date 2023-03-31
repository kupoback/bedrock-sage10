<template>
    <div class="load-more-btn"
         :class="containerClass">
        <button type="button"
                :class="buttonClass"
                :id="buttonId"
                @click.prevent="$emit('btnAction')"
                @keydown.enter.prevent="$emit('btnAction')"
                v-html="text" />
    </div>
</template>

<script type="application/javascript">
    export default {
        props: {
            buttonClass: {
                type: String,
                default: '',
            },
            buttonId: {
                type: String,
                default: '',
            },
            containerClass: {
                type: String,
                default: '',
            },
            text: {
                type: String,
                default: 'Load More',
            },
        },
        data: () => ({}),
        beforeCreate() {},
        created() {},
        beforeMount() {},
        mounted() {},
        methods: {},
        components: {},
        computed: {},
        watch: {},
        name: "LoadMore"
    };
</script>

<style scoped lang="scss">
    .load-more-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
    
    button {
        border: none;
        margin: 0 auto;
        &:hover {
            cursor: pointer;
        }
    }
</style>
