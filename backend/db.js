const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://gofood:password30@cluster0.zvztf7t.mongodb.net/gofood?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
    
    // Fetch data from the collection
    const collection = mongoose.connection.db.collection("food_item");
    const data = await collection.find({}).toArray();
    console.log();
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit with failure
  }
};

module.exports = mongoDB;
