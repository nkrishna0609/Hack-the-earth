// This function is the webhook's request handler.
exports = async function(payload) {
    console.log(payload);
    const mongodb = context.services.get("mongodb-atlas");
    const mycollection = mongodb.db("store_db").collection("numInStore");
    const q = {"docNum": "1"};
    const body = EJSON.parse(payload.body.text()); 
    const { numExit } = body;
    const update = {
      "$set": {
      "numExit": numExit
      }
    };
    return mycollection.updateOne(q, update).then(result => {
      return {result}
    }).catch((error) => {
      return {error};
    });
}