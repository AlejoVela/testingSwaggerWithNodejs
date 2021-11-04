const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connection with MongoDB is OK');
  } catch (err) {
    console.log(`Error to connect with mongo, Error: ${e}`);
  }
}

module.exports = { dbConnection };