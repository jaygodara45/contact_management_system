const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Database connection successful');
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });

  const userSchema = mongoose.Schema({
    image: String,
     email: String,
    name: String
  })

 module.exports =  mongoose.model('user', userSchema);