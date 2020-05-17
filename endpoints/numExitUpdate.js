// This function is the webhook's request handler.
exports = async function(payload) {
    const mongodb = context.services.get("mongodb-atlas");
    const mycollection = mongodb.db("store_db").collection("numInStore");
    const q = {"docNum": "1"};
    const update = {
      "$set": {
      "numExit": payload.query
      }
    };
    mycollection.updateOne(q, update)
};