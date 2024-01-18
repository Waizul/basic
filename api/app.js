import express from "express";
import cookieParser from "cookie-parser";
import path from path

import { UserRoutes } from "./modules/user/user.route.js";
import { ListingRoutes } from "./modules/listing/listing.route.js";
import { AuthRoutes } from "./modules/auth/auth.route.js";
import globalErrorHandler from "./middlewares/globalErrorHandler.js";

const app = express();

const __dirname = path.resolve()

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", AuthRoutes);
app.use("/api/user", UserRoutes);
app.use("/api/listing", ListingRoutes);

app.use(express.static(path.join(__dirname, '/client/dist' )))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})

app.use(globalErrorHandler);

export default app;
