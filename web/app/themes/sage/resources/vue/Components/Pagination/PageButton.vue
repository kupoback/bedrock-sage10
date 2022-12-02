<template>
    <button type="button"
            class="vue-paginate__button"
            :class="[
                pageLinkClass,
                additionalClass
            ]"
            :aria-disabled="isDisabled"
            :disabled="isDisabled"
            :tabindex="tabIndex"
            @click="selectPage"
            @keydown.enter="selectPage">
        <slot :name="slotName">
            {{buttonText}}
        </slot>
    </button>
</template>

<script type="application/javascript">
    
    export default {
        props: {
            pageLinkClass: {
                type: String,
                default: '',
            },
            additionalClass: {
                type: String,
                default: '',
            },
            buttonText: {
                type: [Number, String],
                default: '',
            },
            tabIndex: {
                type: Number,
                default: 0,
            },
            isDisabled: {
                type: Boolean,
                default: false,
            },
            pageNumber: {
                type: Number,
                default: 1,
            },
            slotName: {
                type: String,
                default: 'button',
            },
        },
        data: () => ({}),
        beforeCreate() {},
        created() {},
        beforeMount() {},
        mounted() {},
        methods: {
            selectPage() {this.$emit('selectPage', this.pageNumber)}
        },
        components: {},
        computed: {},
        watch: {},
        name: "PageButton"
    }
</script>

<style scoped lang="scss">

</style>
