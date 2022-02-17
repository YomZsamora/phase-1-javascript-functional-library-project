
// Iterates over the collection of elements, passing each element in turn to the callback function.
function myEach(collection, callback) {
   // collection could either be an array or object. That's what we first check
   let collectionElements = []
   if(typeof collection == "object") {
      collectionElements = Object.values(collection)
   } else {
      collectionElements = collection
   }
   for (const element of collectionElements ) {
      callback(element)
   }
   return collection
}