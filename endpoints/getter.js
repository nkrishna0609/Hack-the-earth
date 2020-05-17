// This function is the webhook's request handler.
exports = function(payload, response) {
    const mongodb = context.services.get("mongodb-atlas");
    const mycollection = mongodb.db("store_db").collection("numInStore");
    return mycollection.find({}, {'_id': false, 'docNum': false}).toArray();
};