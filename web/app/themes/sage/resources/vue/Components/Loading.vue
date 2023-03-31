<template>
    <div class="loading">
        <svg id="L4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
             x="0px"
             y="0px"
             viewBox="0 0 100 50"
             xml:space="preserve">
            <circle :fill="fillColor" stroke="none" cx="32" cy="25" r="6">
                <animate
                    attributeName="opacity"
                    dur="1s"
                    values="0;1;0"
                    repeatCount="indefinite"
                    begin="0.1" />
            </circle>
            <circle fill="#CF4520" stroke="none" cx="50" cy="25" r="6">
                <animate
                    attributeName="opacity"
                    dur="1s"
                    values="0;1;0"
                    repeatCount="indefinite"
                    begin="0.2" />
            </circle>
            <circle :fill="fillColor" stroke="none" cx="68" cy="25" r="6">
                <animate
                    attributeName="opacity"
                    dur="1s"
                    values="0;1;0"
                    repeatCount="indefinite"
                    begin="0.3" />
            </circle>
        </svg>
    </div>
</template>

<script type="application/javascript">
    export default {
        props: {
            white: {
                type: Boolean,
                default: false,
            },
        },
        data: () => ({
            fillColor: "#02475D",
        }),
        created() {
            this.fillColor = this.white && '#fff';
        },
        name: "Loading"
    };
</script>

<style lang="scss" scoped>
    .loading {
        display:         flex;
        justify-content: center;
        align-items:     center;
        height:          100%;
        width:           100%;
        padding:         2.5rem 0 5rem;
        svg {
            width: 100px;
        }
    }
</style>
