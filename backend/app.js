import express from "express";
import mongoose from "mongoose";
import blogRouter from './routes/blog-routes';
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
mongoose.set('strictQuery', true);

app.use("/api/blog",blogRouter);
mongoose
  .connect(
    "mongodb+srv://admin:VSkCyzvQHNL2NNdK@blog.7zqdw88.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log("Connected TO Database and Listening TO Localhost 5000")
  )
  .catch((err) => console.log(err));
