
// Iterates over the collection of elements, passing each element in turn to the callback function.
function myEach(collection, callback) {
	// collection could either be an array or object. That's what we first check
	let collectionElements = []
	if(typeof collection === "object") {
		collectionElements = Object.values(collection)
	} else {
		collectionElements = collection
	}
	for (const element of collectionElements ) {
		callback(element)
	}
	return collection
}

// Produces a new collection of values by mapping each value in collection through a transformation function, callback.
function myMap(collection, callback) {
	// collection could either be an array or object. That's what we first check
	let collectionElements = []
	if(typeof collection === "object") {
		collectionElements = Object.values(collection)
	} else {
		collectionElements = collection
	}
	let newCollection = []
	for (const element of collectionElements) {
		newCollection.push(callback(element))
	}
	// Returns the new collection without modifying the original.
	return newCollection
}

// Returns the correct reduced value when either passed or not passed an initial value
function myReduce(collection, callback, accumulator) {
	// collection could either be an array or object. That's what we first check
	let collectionElements = []
	if(typeof collection === "object") {
		collectionElements = Object.values(collection)
	} else {
		collectionElements = collection
	}
	// Since starting value for the accumulator is optional
	if(typeof accumulator === "number") {
		for(const element of collectionElements){
			accumulator = callback(accumulator, element, collectionElements)
		}
	} else {
		accumulator = parseInt(collectionElements.slice(0,1))
		let newCollection = collectionElements.slice(1)
		for(let element of newCollection) {
			element = parseInt(element)
			accumulator = callback(accumulator, element, collectionElements)
		}
	}
	return accumulator 
}

// Returns the value if found and returns undefined if the value is not present
function myFind(collection, predicate) {
	// collection could either be an array or object. That's what we first check
	let collectionElements = []
	if(typeof collection === "object") {
		collectionElements = Object.values(collection)
	} else {
		collectionElements = collection
	}
	for (const element of collectionElements){
		if(predicate(element)){
			return element
		}
	}
}

// Looks through each value in the collection, returning an array of all the values that pass a truth test (predicate). 
function myFilter(collection, predicate) {
	// collection could either be an array or object. That's what we first check
	let collectionElements = []
	if(typeof collection === "object") {
		collectionElements = Object.values(collection)
	} else {
		collectionElements = collection
	}
	let filteredCollection = []
	for (const element of collectionElements) {
		if(predicate(element)){
			filteredCollection.push(element)
		}
	}
	return filteredCollection
}
