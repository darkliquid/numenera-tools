// combineExtensions - combine multiple items into a single item with all of the extension
// properties combined, keyed on the item name.
function combineExtensions(items) {
    var keys = items.map(function (item) { return `${item.name}-${item.sourcebook}` }).filter((v, i, a) => a.indexOf(v) === i)
    var combined = {};
    var combinedExtensions = {};

    // combine all extensions by name, since we want to apply extensions regardless of sourcebook
    items.forEach(function (item) {
        if (item.extensions) {
            if (!combinedExtensions[item.name]) {
                combinedExtensions[item.name] = [];
            }
            combinedExtensions[item.name] = [
                ...combinedExtensions[item.name],
                ...item.extensions
            ]
        }
    })

    // combine duplicates that share name and sourcebook together
    items.forEach(function (item) {
        if (!combined[`${item.name}-${item.sourcebook}`]) {
            combined[`${item.name}-${item.sourcebook}`] = {}
        }

        // shallow merge the item into the existing item
        Object.assign(combined[`${item.name}-${item.sourcebook}`], item)
        combined[`${item.name}-${item.sourcebook}`].extensions = combinedExtensions[item.name]
    })

    // ensure our combined items are in the same order as the original items
    items = keys.map((key) => { return combined[key] })
    return items
}

export default combineExtensions