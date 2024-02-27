import "@babel/polyfill";

import express from "express";
import bodyparser from "body-parser";
import cookieparser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import passport from "passport";
import session from "express-session";
import dotenv from "dotenv";
import { api } from "./index.js";

const app = express();
app.use(bodyparser.json({ type: "application/*+json" }));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookieparser());
app.use(cors());
dotenv.config();

// for sessions mgt
app.use(
  session({
    secret: process.env.secret,
    resave: true,
    saveUninitialized: true,
    cookie: { secure: true, httpOnly: true, maxAge: 86400 },
  })
);

app.use(passport.initialize());
app.use(passport.session());

// DB Connect
// mongoose.Promise = global.Promise;
// mongoose
//   .connect(process.env.MONGODB || "", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("database connected"))
//   .catch((err) => console.log("could not connect database", err))
//   .finally(() => null);

app.get("/", (req, res) => {
  res.send("<p>Welcome to my Simple Twitter clone</p>");
});

// api routes
app.use("/api/v1", api);

const PORT = process.env.PORT || "";

app.listen(PORT, () => {
  console.log(`server listens here on ${PORT}`);
});

export default app;
