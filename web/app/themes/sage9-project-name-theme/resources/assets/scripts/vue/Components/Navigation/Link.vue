<template>
    <li :class="`header__item ${listItemClass(postId, menuItem.objId, menuItem.classes)}`">
        <a :href="menuItem.permalink"
           :class="`${isActive(postId, menuItem.objId)}`"
           :target="menuItem.target"
           v-text="menuItem.title"></a>
        <ul v-if="menuItem.children.length"
            class="submenu">
            <li v-for="({classes, id, objId, permalink, target, title}) in menuItem.children"
                :class="`header__item ${listItemClass(postId, objId, classes)}`"
                :key="id">
                <a :href="permalink"
                   :class="`${isActive(postId, objId)}`"
                   :target="target"
                   v-text="title"></a>
            </li>
        </ul>
    </li>
</template>

<script type="application/javascript">
    import mixins from "../../Util/mixins.js";

    export default {
        props: {
            menuItem: Object,
            postId: [Number, String],
        },
        mixins: [mixins],
        name: "Link"
    };
</script>

<style scoped>

</style>
