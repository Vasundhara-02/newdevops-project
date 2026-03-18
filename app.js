const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.json({
    message: "Hello from Vasundhara's DevOps Project!",
    status: "running",
    version: "1.0.0"
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: "healthy",
    uptime: process.uptime()
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});