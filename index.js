import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  // name of the DB
  database: "Book",
  password: "12345",
  port: 5432,
});
db.connect();
// use body parser as middle ware 
app.use(bodyParser.urlencoded({ extended: true }));
// static files
app.use(express.static("public"));


// use async to wait for response
app.get("/", async (req, res) => {
  // use await to get response from DB
  const result = await db.query("SELECT * FROM book_reviews");
  res.render('index.ejs',{book:result.rows})
});
app.get("/add-book", async (req, res) => {
  res.render('add.ejs')
});

app.post("/add", async (req, res) => {
 console.log(req.body);
 res.redirect('add-book');
});

app.post("/edit", async (req, res) => {
  
});

app.post("/delete", async (req, res) => {
  
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
