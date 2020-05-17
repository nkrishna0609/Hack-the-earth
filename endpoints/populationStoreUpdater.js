// This function is the webhook's request handler.
exports = async function(payload) {
    console.log(payload);
    const mongodb = context.services.get("mongodb-atlas");
    const mycollection = mongodb.db("store_db").collection("numInStore");
    const q = {"docNum": "2"};
    const body = EJSON.parse(payload.body.text()); 
    const { currentPopulation } = body;
    const update = {
      "$set": {
      "currentPopulation": currentPopulation
      }
    };
    return mycollection.updateOne(q, update).then(result => {
      return {result}
    }).catch((error) => {
      return {error};
    });
}