var MongoClient = require("mongodb").MongoClient;
var url = 'mongodb://dbjc:27017/';

MongoClient.connect(url, function (err, db) {
  if (err) {
    throw err;
  }
  var dbo = db.db("distribuidos");
  exports.insertarProducto = function (obj) {
    dbo.collection("productos").insertOne(obj, function (err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  };
  dbo
    .collection("productos")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      console.log("llegamos a la funcion se mamo");
      exports.consultarProductos = function () {
        console.log("este es el resultado: " + "prueba" + result);
        return result;
      };
      db.close();
    });

  exports.querys = function () {
    dbo
      .collection("customers")
      .find(query)
      .toArray(function (err, result) {
        if (err) throw err;
        exports.consultarQuery = function () {
          return result;
        };
        db.close();
      });
  };

  exports.borrarProducto = function (obj) {
    dbo.collection("customers").deleteOne(myquery, function (err, obj) {
      if (err) throw err;
      db.close();
    });
  };
});
