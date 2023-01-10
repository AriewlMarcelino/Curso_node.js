



// import express from "express";
// import exphbs from "express-handlebars";
// import mysql from "mysql";

// const port = 3000;
// const app = express();

// app.use(
//   express.urlencoded({
//     extended: true,
//   })
// );

// app.use(express.json());

// app.engine("handlebars", exphbs.engine());
// app.set("view engine", "handlebars");

// app.get("/", (req, res) => {
//   res.render("home");
// });

// app.post('/books/insertbook', (req, res) => {
//   const title = req.body.title
//   const pageqty = req.body.pageqty

//   const sql = 'INSERT INTO books (title, pageqty) VALUES (?)';
//   const values = [title, pageqty];

//   conn.query(sql, [values], function (err)  {
//       if (err) {
//           console.log(err)
//       }
//       res.redirect('/')
//   })
// })

// // app.post('/books/insertbook', (req, res) => {
// //   const title = req.body.title;
// //   const pageqty = req.body.pageqty;

// //   const mysql = `INSERT INTO nodemysql (title,pageqty) VALUES(?)`;
// //   const values = [title,pageqty];

// //   conn.query(mysql,[values], function (err) {
// //     if (err) {
// //       console.log(err);
// //     }

// //     res.redirect('/');
// //   });
// // });

// const conn = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "nodemysql",
// });

// conn.connect(function (err) {
//   if (err) {
//     console.log(err);
//   }
//   console.log(`Database is running..`);
// });

// app.listen(port, () => {
//   console.log(`server is running port ${port}`);
// });
