let postsVar = typeof POSTS !== 'undefined' && POSTS;

export default {
	loading: false,
	maxPages: 0,
	page: 1,
	posts: [],
	queryParams: {},
	search: '',
	searchParams: {},
	searchPostTypeCount: null,
	selectedCategories: [],
	...postsVar,
};
