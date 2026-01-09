require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
connectDB();

/* ✅ CORS FIX */
app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://passworflows.netlify.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

/* ✅ Health check (VERY IMPORTANT) */
app.get("/", (req, res) => {
  res.send("Password Reset API is running");
});

/* ✅ Auth routes */
app.use("/auth", require("./routes/authRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
