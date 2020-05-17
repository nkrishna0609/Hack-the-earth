// This function is the webhook's request handler.
exports = async function(payload) {
    console.log(payload);
    const mongodb = context.services.get("mongodb-atlas");
    const mycollection = mongodb.db("store_db").collection("numInStore");
    const q = {"docNum": "4"};
    const update = {
      "$set": {
      "numEnter": payload.query
      }
    };
    return mycollection.updateOne(q, update).then(result => {
      return {payload};
    }).catch((error) => {
      return {error};
    });
};
