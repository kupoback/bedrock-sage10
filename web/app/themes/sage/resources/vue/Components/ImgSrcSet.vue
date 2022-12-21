<template>
    <picture>
        <source v-if="image?.webpSrcset"
                :srcset="image.webpSrcset"
                :sizes="image.sizes"
                type="image/webp"/>
        <source :srcset="image?.srcset || ''"
                :sizes="image?.sizes || ''"
                :type="image?.type || ''"/>
        <img :src="image?.src || ''"
             :data-src="image?.src || ''"
             :class="imageClass"
             :content="image?.src || ''"
             :alt="image?.alt || ''"
             role="img"
             property="v:image"/>
    </picture>
</template>

<script type="application/javascript">
    import mixins from "../Util/mixins";
    
    export default {
        props: {
            image: [Array, Object],
            imageClass: {
                type: String,
                default: '',
            },
        },
        mixins: [mixins],
        name: "ImgSrcSet"
    };
</script>

<style scoped>

</style>
