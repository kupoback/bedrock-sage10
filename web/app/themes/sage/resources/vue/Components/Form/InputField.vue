<template>
    <fieldset>
        <label v-if="label"
               :for="inputId"
               :class="labelClass"
               v-html="label"/>
        <input :class="inputClass"
               :id="inputId"
               :placeholder="placeholder"
               :type="inputType"
               @input="$emit('inputEmit', $event.target.value)"
        />
    </fieldset>
</template>

<script type="application/javascript">
    export default {
        props: {
            inputId: {
                type: String,
                default: '',
            },
            inputClass: {
                type: String,
                default: '',
            },
            inputType: {
                type: String,
                default: 'text'
            },
            label: {
                type: String,
                default: null,
            },
            labelClass: {
                type: String,
                default: null,
            },
            placeholder: {
                type: String,
                default: '',
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
        components: {},
        computed: {},
        watch: {},
        name: "InputField"
    }
</script>

<style scoped lang="scss">

</style>
