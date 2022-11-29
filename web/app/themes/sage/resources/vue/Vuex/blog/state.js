let blog = typeof BLOG !== 'undefined' && BLOG;

export default {
	...blog,
	loading: false,
	maxPages: 0,
	page: 1,
	posts: [],
	queryParams: {},
	search: '',
	searchParams: {},
	searchPostTypeCount: null,
	selectedCategories: null,
};
