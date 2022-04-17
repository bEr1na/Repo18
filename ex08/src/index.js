let one = new Set([1, 2, 3, 4, 5]);
let two = new Set([6, 4, 3, 2]);
let unionSet = new Set([...one, ...two]);
let intersectionSet = new Set([...one].filter(value => two.has(value)));
let differenceSet = new Set([...one].filter(value => !two.has(value)));

module.exports = { unionSet, intersectionSet, differenceSet };