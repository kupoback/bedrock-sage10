<template>
    <article class="flex bg-white transition hover:shadow-xl dark:bg-gray-800 dark:shadow-gray-800/25"
             :class="{
                'border-2 border-dark dark:border-white rounded-lg': sticky,
                'my-12': !lastItem && !firstItem,
                'mt-0': firstItem,
                'my-6': !lastItem,
             }">
        <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <time v-if="!objIsEmpty(date)"
                  datetime="2022-10-10"
                  class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900 dark:text-white">
                <span v-if="objHasKey(date, 'year')"
                      v-html="date.year"/>
                <span class="w-px flex-1 bg-gray-900/10 dark:bg-white/10"></span>
                <span v-if="objHasKey(date, 'date')"
                      v-html="date.date"/>
            </time>
        </div>
        
        <div v-if="!objIsEmpty(image)"
             class="hidden sm:block sm:basis-56">
            <PostImage :image="image"
                       class="aspect-square h-full w-full object-cover"/>
        </div>
        
        <div class="flex flex-1 flex-col justify-between">
            <div class="border-l border-gray-900/10 p-4 dark:border-white/10 sm:!border-l-transparent sm:p-6">
                <a :href="permalink">
                    <h3 class="font-bold uppercase text-gray-900 dark:text-white"
                        v-html="title"/>
                </a>
                
                <p v-if="excerpt"
                   class="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3 dark:text-gray-200"
                   v-html="excerpt"/>
            </div>
            
            <div class="sm:flex sm:items-end sm:justify-end">
                <a :href="permalink"
                   class="block bg-yellow-400 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-500"
                   v-html="readMore"
                />
            </div>
        </div>
    </article>
</template>

<script type="application/javascript">
    import {store} from "../../../Vuex/blog/store";
    import mixins from "../../../Util/mixins";
    
    import PostImage from "../../../Components/PostImage";
    
    export default {
        props: {
            author: {
                type: String,
                default: false,
            },
            categories: {
                type: String,
                default: false,
            },
            date: {
                type: [Array, Object],
                default: [],
            },
            excerpt: {
                type: String,
                default: false,
            },
            firstItem: {
                type: Boolean,
                default: true,
            },
            image: {
                type: [Array, Object],
                default: [],
            },
            lastItem: {
                type: Boolean,
                default: true,
            },
            permalink: {
                type: String,
                default: false,
            },
            sticky: {
                type: Boolean,
                default: false,
            },
            title: {
                type: String,
                default: false,
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
        components: {PostImage},
        computed: {
            readMore() {
                return store.state.labels?.view_more || 'Read More'
            },
        },
        watch: {},
        mixins: [mixins],
        name: "Post"
    }
</script>

<style scoped lang="scss">

</style>
