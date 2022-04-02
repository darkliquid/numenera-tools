// combineExtensions - combine multiple items into a single item with all of the extension
// properties combined, keyed on the item name.
function combineExtensions(items) {
    var keys = items.map(function (item) { return item.name }).filter((v, i, a) => a.indexOf(v) === i)
    var combined = {};

    items.forEach(function (item) {
        if (!combined[item.name]) {
            combined[item.name] = item
            return
        }

        var extensions = combined[item.name].extensions || [];
        if (item.hasOwnProperty('extensions')) {
            extensions = extensions.concat(item.extensions)
        }
        Object.assign(combined[item.name], item)
        combined[item.name].extensions = extensions
    })

    items = keys.map((key) => { return combined[key] })
    return items
}

export default combineExtensions