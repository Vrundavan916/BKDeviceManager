const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Home API
app.get("/", (req, res) => {
  res.json({
    app: "BK Device Manager",
    version: "1.0.0",
    status: "Running"
  });
});

// Login API (Demo)
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@bk.com" && password === "123456") {
    return res.json({
      success: true,
      token: "demo_token_12345"
    });
  }

  res.status(401).json({
    success: false,
    message: "Invalid Email or Password"
  });
});

// Device Registration (Demo)
app.post("/api/device/register", (req, res) => {
  const { deviceName, deviceId } = req.body;

  res.json({
    success: true,
    message: "Device Registered",
    deviceName,
    deviceId
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`BK Device Manager running on port ${PORT}`);
});
