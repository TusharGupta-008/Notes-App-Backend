import express from "express";
import dotenv from "dotenv";
import connectDb from "./db/db.js";
import appRouter from "./routes/user.routes.js";
import noteRouter from "./routes/note.router.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);

const port = process.env.PORT;

app.use(express.json());

app.use("/api", appRouter);
app.use("/api/notes", noteRouter);
connectDb();
app.listen(port, () => {
  console.log(`Server has started on ${port}`);
});
