require("dotenv").config();
const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.status(201).json({ message: "🚀🚀🚀🚀🚀" });
});
async function startServer(){
  try { 
    await new Promise((resolve, reject) => {
      const port = process.env.PORT;
      app.listen(port, () => {
        console.log(`Server is live and running on ${port}`);
        resolve();
      }).on('error', reject);
      });
  } catch (error){
    console.error('Error starting server', error);
  }
}
startServer();