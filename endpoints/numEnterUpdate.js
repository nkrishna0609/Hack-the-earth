// This function is the webhook's request handler.
exports = async function(payload) {
    console.log(payload);
    const mongodb = context.services.get("mongodb-atlas");
    const mycollection = mongodb.db("store_db").collection("numInStore");
    const q = {"docNum": "4"};
    const { numEnter } = payload.query;
    const update = {
      "$set": {
      "numEnter": numEnter
      }
    };
    return mycollection.updateOne(q, update).then(result => {
      return {payload};
    }).catch((error) => {
      return {error};
    });
};