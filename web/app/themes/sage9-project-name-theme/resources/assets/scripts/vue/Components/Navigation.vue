<template>
    <header v-if="desktopNav && mobileNav"
            :class="headerClass">
        
        <MobileHamburger v-show="($resize && viewport === 'mobile') || viewport === 'mobile'"
                         :homeUrl="homeUrl" />
        
        <DesktopNavigation v-if="($resize && viewport === 'desktop') || viewport === 'desktop'"
                           :homeUrl="homeUrl"
                           :menu="desktopNav"
                           :post-id="postId" />
        
        <MobileNavigation v-if="($resize && viewport === 'mobile') || viewport === 'mobile'"
                          :homeUrl="homeUrl"
                          :menu-open="mobileMenuOpen"
                          :menu="mobileNav"
                          :post-id="postId" />
    
    </header>
</template>

<script type="application/javascript">
    
    import DesktopNavigation from "./Navigation/DesktopNavigation.vue";
    import MobileHamburger from "./Navigation/MobileHamburger.vue";
    import MobileNavigation from "./Navigation/MobileNavigation.vue";
    
    export default {
        data() {
            return {
                headerClass: "header",
                homeUrl: "",
                mobileMenuOpen: false,
                postId: NAV.postId,
                viewport: this.$mq.above(768) ? "desktop" : "mobile",
            };
        },
        created() {
            if (typeof NAV !== "undefined") {
                this.headerClass += ` header--${NAV.pageSlug}`;
                this.homeUrl = NAV.siteUrl;
            }
        },
        mounted() {
            this.menuBtnEvent();
            window.onresize = () => {
                /*
                 * Need to update the viewport only if it changes
                 */
                const vp = this.$mq.above(768) ? "desktop" : "mobile";
                if (vp !== this.viewport) this.viewport = vp;
        
                if (this.mobileMenuOpen) {
                    const menuBtn = document.querySelector('.header .hamburger');
                    this.toggleMenu(menuBtn, false);
                }
            };
        },
        methods: {
            menuBtnEvent() {
                const menuBtn = document.querySelector('.header .hamburger');
                console.log(menuBtn);
                if (menuBtn) {
                    menuBtn.addEventListener('click', (elm) => {
                        const elmTarget = elm.target;
                        if (this.viewport === 'mobile') this.toggleMenu(elmTarget, !this.mobileMenuOpen);
                    });
                }
            },
            toggleMenu(elmTarget, open) {
                const bodyElm = document.querySelector('body');
                const bodyClass = `menu-open`;
                const isActiveClass = `is-active`;
                if (open) {
                    elmTarget.classList.add(isActiveClass);
                    bodyElm.classList.add(bodyClass);
                }
                else {
                    elmTarget.classList.remove(isActiveClass);
                    bodyElm.classList.remove(bodyClass);
                }
                this.mobileMenuOpen = open;
            },
        },
        computed: {
            desktopNav() {
                return this.$store.state.desktopNav;
            },
            mobileNav() {
                return this.$store.state.mobileNav;
            },
        },
        components: {DesktopNavigation, MobileHamburger, MobileNavigation},
        name: "Navigation"
    };
</script>

<style scoped>

</style>
