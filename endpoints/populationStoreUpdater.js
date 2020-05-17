// This function is the webhook's request handler.
exports = async function(payload) {
    const mongodb = context.services.get("mongodb-atlas");
    const mycollection = mongodb.db("store_db").collection("numInStore");
    const q = {"docNum": "2"};
    const update = {
      "$set": {
      "currentPopulation": payload.query
      }
    };
    mycollection.updateOne(q, update)
};