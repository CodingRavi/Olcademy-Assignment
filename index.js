const { Router } = require("express");
const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// import Routes
const authRoute = require("./routes/auth");
// const postRoute = require("./routes/post");

// env config
dotenv.config();

// connected to mongodb at mongodb://localhost/test
mongoose.connect(
  process.env.DB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log(`DB connected`)
);

// middleware
app.use(express.json());

// cors
app.use(cors());

// Route middlewares
app.use("/api/user", authRoute);
// app.use("/api/post", postRoute);

// server is runing on port 3000
app.listen(process.env.PORT, () =>
  console.log(`server is runing`)
);
