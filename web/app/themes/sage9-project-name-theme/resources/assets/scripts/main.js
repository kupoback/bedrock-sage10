/** import external dependencies */
import $ from 'jquery/dist/jquery.js';
import "waypoints/lib/jquery.waypoints.min.js";
import Swiper from 'swiper/dist/js/swiper.js';

/** import local dependencies */
import Router from './util/Router';
import common from './routes/common';
import pageTemplateTemplateHome from './routes/home';
import pageTemplateTemplateAbout from './routes/about';

/**
 * Populate Router instance with DOM routes
 * @type {Router} routes - An instance of our router
 */
const routes = new Router({
	/** All pages */
	common,
	/** Home page */
	pageTemplateTemplateHome,
	pageTemplateTemplateAbout,
});

/** Load Events */
jQuery(document).ready(() => routes.loadEvents());
