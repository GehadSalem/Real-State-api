import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.router.js";
import listingRouter from "./routes/listing.router.js"
import cors from "cors";
import connectDB from "../DB/connection.js";
import { globalErrorHandling } from './utils/errorHandling.js'
import path from 'path'


const initApp = (app, express) => {
  app.use(cors());
  app.use(express.json({}));

  app.use("/api/user", userRouter);
  app.use("/api/auth", authRouter);
  app.use("/api/listing", listingRouter);

  // Catch-all route for invalid URLs
  app.use((req, res) => {
    res.status(404).send("Invalid Routing. Please check the URL or method.");
  });

  // Global error handling
  app.use(globalErrorHandling);
  
  // DB connection
  connectDB();
};


export default initApp;
