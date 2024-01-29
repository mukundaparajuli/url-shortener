const mongoose = require("mongoose");

const databaseConnection = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("connection to the database has been made successfully! :",connect.connection.host, connect.connection.name)
    } catch (error) {
        console.log("connection to the database could not be made!  :", error)
    }
}
module.exports = databaseConnection;



