<template>
    <nav :class="[defaultClasses.nav, navClass]">
        <ul :class="[defaultClasses.container, containerClass]">
            <li v-if="firstLastButton"
                :class="[
                    defaultClasses.listItem,
                    defaultClasses.firstLastBtn,
                    defaultClasses.firstBtn,
                    pageClass,
                    firstPageSelected() ? (disabledClass || 'disabled') : ''
                ]">
                <PageButton
                    slotName="firstButton"
                    :buttonText="firstButtonText"
                    :isDisabled="selected === 1"
                    :tabIndex="firstPageSelected ? -1 : 0"
                    :pageLinkClass="firstBtnClass"
                    @selectPage="selectFirstPage">

                    <template #firstButton>
                        <slot name="firstButton"></slot>
                    </template>

                </PageButton>
            </li>

            <li v-if="!(firstPageSelected() && hidePrevNext)"
                :class="[
                    defaultClasses.listItem,
                    defaultClasses.prevNextBtn,
                    defaultClasses.prevBtn,
                    prevClass,
                    firstPageSelected() ? (disabledClass || 'disabled') : ''
                ]">
                <PageButton
                    slotName="prevPage"
                    :buttonText="prevText"
                    :tabIndex="firstPageSelected ? -1 : 0"
                    :pageLinkClass="prevBtnClass"
                    @selectPage="prevPage">

                    <template #prevPage>
                        <slot name="prevPage"></slot>
                    </template>

                </PageButton>
            </li>

            <li v-for="page in pages"
                :key="page.content"
                :class="[
                    defaultClasses.listItem,
                    defaultClasses.pageItem,
                    pageClass,
                    page.breakView ? (breakViewClass || defaultClasses.listBreakView) : '',
                    page.selected ? (activeClass || 'active') : '',
                    page.disabled ? (disabledClass || 'disabled') : '',
                ]">

                <PageButton v-if="page.breakView"
                            slotName="pageBreakView"
                            :buttonText="breakViewText"
                            isDisabled
                            :pageLinkClass="[pageLinkClass, breakViewLinkClass]"
                            :pageNumber="selected"
                            :tabIndex="0">

                    <template #pageBreak>
                        <slot name="pageBreak"></slot>
                    </template>

                </PageButton>

                <PageButton v-else-if="page.disabled"
                            slotName="pageDisabled"
                            :pageLinkClass="[pageLinkClass, pageDisabledClass]"
                            :buttonText="page.content"
                            :isDisabled="page.disabled"
                            :pageNumber="page.content"
                            :tabIndex="0">

                    <template #pageDisabled>
                        <slot name="pageDisabled"></slot>
                    </template>

                </PageButton>

                <PageButton v-else
                            slotName="page"
                            :pageLinkClass="pageLinkClass"
                            :buttonText="page.content"
                            :isDisabled="selected === page.content"
                            :pageNumber="page.content"
                            :tabIndex="0"
                            @selectPage="handlePageSelected(page.index + 1)">

                    <template #page>
                        <slot name="page"></slot>
                    </template>

                </PageButton>
            </li>

            <li v-if="!(lastPageSelected() && hidePrevNext)"
                :class="[
                    defaultClasses.listItem,
                    defaultClasses.prevNextBtn,
                    defaultClasses.nextBtn,
                    nextClass,
                    lastPageSelected() ? (disabledClass || 'disabled') : ''
                ]">
                <PageButton
                    slotName="nextPage"
                    :buttonText="nextText"
                    :tabIndex="lastPageSelected ? -1 : 0"
                    :isDisabled="selected === pageCount"
                    :pageNumber="selected"
                    :pageLinkClass="nextBtnClass"
                    @selectPage="nextPage">

                    <template #nextPage>
                        <slot name="nextPage"></slot>
                    </template>

                </PageButton>
            </li>

            <li v-if="firstLastButton"
                :class="[
                    defaultClasses.listItem,
                    defaultClasses.firstLastBtn,
                    defaultClasses.lastBtn,
                    pageClass,
                    lastPageSelected() ? (disabledClass || 'disabled') : ''
                ]">

                <PageButton
                    slotName="lastButton"
                    :buttonText="lastButtonText"
                    :tabIndex="selectLastPage ? -1 : 0"
                    :isDisabled="selected === pageCount"
                    :pageLinkClass="lastBtnClass"
                    @selectPage="selectLastPage">

                    <template #lastButton>
                        <slot name="lastButton"></slot>
                    </template>

                </PageButton>
            </li>
        </ul>
    </nav>
</template>

<script type="application/javascript">

    import {emitter} from "../../Util/bus";
    import PageButton from "./PageButton";
    export default {
        name: 'Pagination',
        components: {PageButton},
        props: {
            forcePage: {
                type: Number
            },
            marginPages: {
                type: Number,
                default: 1
            },
            pageCount: {
                type: Number,
                required: true
            },
            pageRange: {
                type: Number,
                default: 3
            },
            value: {
                type: Number
            },

            clickHandler: {
                type: Function,
                default: () => {
                }
            },

            breakViewText: {
                type: String,
                default: '…'
            },
            firstButtonText: {
                type: String,
                default: 'First'
            },
            nextText: {
                type: String,
                default: 'Next'
            },
            lastButtonText: {
                type: String,
                default: 'Last'
            },
            prevText: {
                type: String,
                default: 'Prev'
            },

            firstLastButton: {
                type: Boolean,
                default: false
            },
            hidePrevNext: {
                type: Boolean,
                default: false
            },

            activeClass: {
                type: String,
                default: 'vue-paginate__container-number__active'
            },
            breakViewClass: {
                type: String
            },
            breakViewLinkClass: {
                type: String
            },
            containerClass: {
                type: String,
                default: ''
            },
            disabledClass: {
                type: String,
                default: 'disabled'
            },
            firstBtnClass: {
                type: String,
                default: 'vue-pagination__container-first__btn',
            },
            lastBtnClass: {
                type: String,
                default: 'vue-pagination__container-last__btn',
            },
            listItemClass: {
                type: String,
                default: ''
            },
            navClass: {
                type: String,
                default: ''
            },
            nextClass: {
                type: String
            },
            nextBtnClass: {
                type: String,
                default: 'vue-pagination__container-next__btn',
            },
            pageClass: {
                type: String,
                default: ''
            },
            prevClass: {
                type: String
            },
            pageDisabledClass: {
                type: String,
                default: '',
            },
            pageLinkClass: {
                type: String,
                default: '',
            },
            prevBtnClass: {
                type: String,
                default: 'vue-pagination__container-prev__btn',
            },
        },
        beforeUpdate() {
            if (this.forcePage === undefined) return
            if (this.forcePage !== this.selected) {
                this.selected = this.forcePage
            }
        },
        computed: {
            pageRangeOffset() {
                if (this.pageRange < 3) {
                    console.error("Setting page-range to 3. Anything lower than 3 does not function");
                    return 3;
                }
                return this.pageRange
            },
            selected: {
                get: function () {
                    return this.value || this.innerValue
                },
                set: function (newValue) {
                    this.innerValue = newValue
                }
            },
            pages: function () {
                let items = {}
                if (this.pageCount <= this.pageRangeOffset) {
                    for (let index = 0; index < this.pageCount; index++) {
                        const isCurrent = index === (this.selected - 1);
                        items[index] = {
                            index: index,
                            content: index + 1,
                            selected: isCurrent,
                            disabled: isCurrent,
                        }
                    }
                } else {
                    const halfPageRange = Math.floor(this.pageRangeOffset / 2)
                    let setPageItem = index => {
                        const isCurrent = index === (this.selected - 1);
                        items[index] = {
                            index: index,
                            content: index + 1,
                            selected: isCurrent,
                            disabled: isCurrent,
                        }
                    }

                    let setBreakView = index => {
                        items[index] = {
                            disabled: true,
                            breakView: true
                        }
                    }

                    // 1st - loop through low end of margin pages
                    for (let i = 0; i < this.marginPages; i++) {
                        setPageItem(i);
                    }

                    // 2nd - loop through selected range
                    let selectedRangeLow = 0;
                    if (this.selected - halfPageRange > 0) {
                        selectedRangeLow = this.selected - 1 - halfPageRange;
                    }

                    let selectedRangeHigh = selectedRangeLow + this.pageRangeOffset - 1;
                    if (selectedRangeHigh >= this.pageCount) {
                        selectedRangeHigh = this.pageCount - 1;
                        selectedRangeLow = selectedRangeHigh - this.pageRangeOffset + 1;
                    }

                    for (let i = selectedRangeLow; i <= selectedRangeHigh && i <= this.pageCount - 1; i++) {
                        setPageItem(i);
                    }

                    // Check if there is breakView in the left of selected range
                    if (selectedRangeLow > this.marginPages) {
                        setBreakView(selectedRangeLow - 1)
                    }

                    // Check if there is breakView in the right of selected range
                    if (selectedRangeHigh + 1 < this.pageCount - this.marginPages) {
                        setBreakView(selectedRangeHigh + 1)
                    }

                    // 3rd - loop through high end of margin pages
                    for (let i = this.pageCount - 1; i >= this.pageCount - this.marginPages; i--) {
                        setPageItem(i);
                    }
                }
                return items
            }
        },
        data() {
            return {
                defaultClasses: {
                    container: 'vue-paginate__container',
                    firstBtn: 'vue-paginate__container-first',
                    firstLastBtn: 'vue-paginate__container-fl',
                    lastBtn: 'vue-paginate__container-last',
                    listBreakView: 'vue-paginate__container-break',
                    listItem: 'vue-paginate__container-page',
                    nav: 'vue-paginate',
                    pageItem: 'vue-paginate__container-number',
                    nextBtn: 'vue-paginate__container-next',
                    prevBtn: 'vue-paginate__container-prev',
                    prevNextBtn: 'vue-paginate__container-pn',
                },
                innerValue: 1,
            }
        },
        methods: {
            handlePageSelected(selected) {
                if (this.selected === selected) return

                this.innerValue = selected
                emitter.emit('input', selected)
                this.clickHandler(selected)
            },
            prevPage() {
                if (this.selected <= 1) return

                this.handlePageSelected(this.selected - 1)
            },
            nextPage() {
                if (this.selected >= this.pageCount) return

                this.handlePageSelected(this.selected + 1)
            },
            firstPageSelected() {
                return this.selected === 1
            },
            lastPageSelected() {
                return (this.selected === this.pageCount) || (this.pageCount === 0)
            },
            selectFirstPage() {
                if (this.selected <= 1) return

                this.handlePageSelected(1)
            },
            selectLastPage() {
                if (this.selected >= this.pageCount) return

                this.handlePageSelected(this.pageCount)
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
