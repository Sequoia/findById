module.exports = findById;

/**
 * @param   Array<Object> collection    collection of objects (with IDs)
 * @param   Mixed         id            STRING or NUMBER id
 * @return  Mixed         FIRST object with matching ID or null
 */
function findById(collection, id){
  return collection.filter(function(item){
    return item.id && (String(item.id) === id || item.id === Number(id));
  })[0] || null;
}
