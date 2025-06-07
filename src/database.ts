import mongoose from "mongoose";
import conn from "./config/conn";
import logger from "./utils/logger";



if (!conn.db.url) {
    logger.error("Database URL is not defined in the configuration.");
    throw new Error("Database URL is not defined in the configuration.");
}
mongoose.connect(conn.db.url);
const connection = mongoose.connection;

connection.once("open", () => {
    logger.info("MongoDB database connection established successfully");
});
connection.on("error", (err) => {
    logger.error("MongoDB connection error. Please make sure MongoDB is running: " + err);
    process.exit(1);
});