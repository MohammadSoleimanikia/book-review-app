import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "12345",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// use async to wait for response
app.get("/", async (req, res) => {
  
});

app.post("/add", async (req, res) => {
 
});

app.post("/edit", async (req, res) => {
  
});

app.post("/delete", async (req, res) => {
  
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});