import express, { json } from "express";
import dotenv from "dotenv";
import { router as userRouter } from './routes/login.js';
import { router as categoriesRouter } from './routes/category.js';
import { router as productRouter} from "./routes/products.js";


const app = express();
app.use(json());
app.use("/users", userRouter);
app.use("/categories", categoriesRouter);
app.use("/products", productRouter);


dotenv.config();

const port = process.env.PORT;
app.listen(port || 8080, () =>
  console.log(`Server running on http://localhost:${port}`)
);
