function CategoryItem({slug, name, taxSelected}) {

	return (
		<div className="form-check">
			<input type="checkbox"
			       value=""
			       id={slug}
                   onClick={() => taxSelected(slug)}
			       className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-yellow-500 checked:border-yellow-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" />
			<label className="form-check-label inline-block text-white"
			       htmlFor={slug}>{name}</label>
		</div>
	)
}

export default CategoryItem;
