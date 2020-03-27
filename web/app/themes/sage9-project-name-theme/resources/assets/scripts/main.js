/** import external dependencies */
import $ from 'jquery/dist/jquery.js';
import "waypoints/lib/jquery.waypoints.min.js";
// import Swiper from 'swiper';

/** import local dependencies */
import Router from './util/Router';
import common from './routes/common';
import home from './routes/home'; // Used for front-page.blade.php
// import blog from './routes/blog'; // Used for home.blade.php
import pageTemplateTemplateAbout from './routes/about';

/**
 * Populate Router instance with DOM routes
 * @type {Router} routes - An instance of our router
 */
const routes = new Router({
	/** All pages */
	common,
	/** Home page */
	home,
	/** Posts Archive */
	// blog,
	/** Custom Page Templates */
	pageTemplateTemplateAbout,
});

/** Load Events */
jQuery(document).ready(() => routes.loadEvents());
