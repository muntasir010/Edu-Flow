import express from "express";
import cors from "cors";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import router from "./modules/routes";

const app = express();

app.use(
  cors({
    origin: ['http://localhost:5173', 'http://localhost:3000'], 
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// app.use(cors());
app.use(express.json());

app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.send("EduFlow API running");
});

app.use(globalErrorHandler);

export default app;
