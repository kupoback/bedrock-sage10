export const addRemoveTerm = (arrayItems, term_id) => {
    if (arrayItems.includes(term_id)) arrayItems = arrayItems.filter(term => term !== term_id);
    else arrayItems.push(term_id);

    return arrayItems;
}

export const objectNotEmpty = (obj) => Object.keys(obj).length !== 0;

export default {
    addRemoveTerm,
    objectNotEmpty,
}
