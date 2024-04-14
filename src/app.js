import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// configure cors in app
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

//==================================
// json limit
app.use(
  express.json({
    limit: "16kb",
  })
);

// url config
app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
);

// folder for assets
app.use(express.static("public"));

//==================================
// cookies
app.use(cookieParser());

export default app;
// export { app }
