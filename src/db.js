import mongoose from "mongoose";

mongoose.connect(process.env.DB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connection to DB");
const handleError = (error) => console.log("DB Error");

db.on("error", handleError);
db.once("open", handleOpen);
