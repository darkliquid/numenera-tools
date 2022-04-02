// combineExtensions - combine multiple items into a single item with all of the extension
// properties combined, keyed on the item name.
function combineExtensions(items) {
    var keys = items.map(function (item) { return item.name }).filter((v, i, a) => a.indexOf(v) === i)
    var combined = {};

    items.forEach(function (item) {
        if (!combined[item.name]) {
            combined[item.name] = item
        }

        if (combined[item.name].hasOwnProperty('extensions') && item.hasOwnProperty('extensions')) {
            combined[item.name].extensions = combined[item.name].extensions.concat(item.extensions)
        }
    })
    
    return keys.map(function (key) { return combined[key] })
}