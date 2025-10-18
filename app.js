const express = require("express");
const { getUserProfile } = require("./controllers/userController.js");
const { limiter } = require("./middlewares/rateLimiter.js");

require("dotenv").config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(limiter);

app.get("/me", getUserProfile);

app.listen(PORT, () => {
  console.log(`Server is starting on port ${PORT}`);
});
