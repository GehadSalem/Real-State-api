import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.router.js";
import listingRouter from "./routes/listing.router.js"
import cors from "cors";
import connectDB from "../DB/connection.js";
import { globalErrorHandling } from './utils/errorHandling.js'
import path from 'path'


const initApp = (app, express) => {
  app.use(cors())
    //convert Buffer Data
    app.use(express.json({}))
    //Setup API Routing 
  app.use("/api/user", userRouter);
  app.use("/api/auth", authRouter);
  app.use("/api/listing", listingRouter);

 // Default home route
 app.use(`/`, (req, res, next) => {
  res.send("Welcome Home")
})

// Catch-all route for invalid URLs
app.all('*', (req, res, next) => {
  res.send("In-valid Routing Plz check url or method")
})

  // Global error handling
  app.use(globalErrorHandling);
  
  // DB connection
  connectDB();
};


export default initApp;
