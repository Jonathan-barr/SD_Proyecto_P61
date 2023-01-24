var MongoClient = require("mongodb").MongoClient;

const url = 'mongodb://dbjc:27017';
const client = new MongoClient(url);

const dbName = 'distribuidos';

exports.consultarProductos = async function () {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('productos');
  const findResult = await collection.find({}).toArray();

  return findResult;
}

exports.insertarProductos = async function (obj) {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('productos');
  const insertResult = await collection.insertOne(obj);

  return insertResult;
}

exports.eliminarProductos = async function (obj) {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('productos');
  const deleteResult = await collection.deleteOne(obj);
  return deleteResult;
}