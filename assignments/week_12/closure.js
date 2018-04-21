//Using closure in Javascript
['Musa', 'David', "John"].map(funcrtion(value));

['Jenni', 'Jennifer', "Marian"].map(funcrtion(value));

function mapFamily(decorator) {
    return function (value) {
        return {
            name: value,
            displayName: decorator + value
        }
    }
}