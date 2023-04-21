import postsStore from "@zustandPosts/store";

function CategoryItem({slug, name}) {
    const {taxInArray, updateTaxonomySelected} = postsStore(state => state)
    const taxChecked = slug => (taxInArray(slug) && '') || '';

	return (
		<div className="">
			<input type="checkbox"
			       value=""
                   checked={taxInArray(slug)}
			       id={slug}
                   onChange={() => updateTaxonomySelected(slug)}
			       className={`${taxChecked(slug)}`} />
			<label className=""
			       htmlFor={slug}>{name}</label>
		</div>
	)
}

export default CategoryItem;
