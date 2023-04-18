import blogStore from "@zustandBlog/store";

function CategoryItem({slug, name, taxSelectState}) {
    const {taxInArray} = blogStore(({taxInArray}) => ({taxInArray}))
    const taxChecked = slug => (taxInArray(slug) && ' checked:bg-yellow-500 checked:border-yellow-500') || '';

	return (
		<div className="form-check">
			<input type="checkbox"
			       value=""
                   checked={taxInArray(slug)}
			       id={slug}
                   onChange={() => taxSelectState(slug)}
			       className={`form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer${taxChecked(slug)}`} />
			<label className="form-check-label inline-block text-white"
			       htmlFor={slug}>{name}</label>
		</div>
	)
}

export default CategoryItem;
