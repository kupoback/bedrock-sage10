let blog = typeof BLOG !== 'undefined' && BLOG;

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
	...blog,
};
