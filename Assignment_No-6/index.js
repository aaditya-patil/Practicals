const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin2:admin2@cluster0.ibalfpg.mongodb.net/students?retryWrites=true&w=majority")
   .then(() => {
    console.log('Connection to database!')
   })
   .catch(() => {
    console.log('Connection to database failed!')
   })

// const db = mongoose.connection;
// db.on("error", (error) => console.log(error));
// db.once("open", () => console.log("Connected Successfully!"));