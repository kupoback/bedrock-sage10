<template>
    <button :class="btnClass"
            :type="btnType"
            @click="$emit('btnAction')"
            @keydown.enter.prevent="$emit('btnAction')">
        <slot v-if="slots.btnContent"
              name="btnContent" />
        {{content}}
    </button>
</template>

<script type="application/javascript">
    import {useSlots} from "vue";
    
    export default {
        setup: ()  => ({
            slots: useSlots(),
        }),
        props: {
            btnClass: {
                type: String,
                default: '',
            },
            btnType: {
                type: String,
                default: 'button',
            },
            content: {
                type: String,
                default: null,
            },
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
        components: {},
        computed: {
        },
        watch: {},
        name: "Button"
    }
</script>

<style scoped lang="scss">

</style>
