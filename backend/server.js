const express = require('express')
const sqlite3 = require('sqlite3').verbose()
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")

const app = express()
app.use(express.json())

const db = new sqlite3.Database("./usersDB.db", (err) => {
    if (err) console.error(err.message)
    console.log('Connected to Sqlite DB');
})

db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
)`);

app.post('/register', async (req, res) => {
    const { username, password } = req.body
    const encryptedPassword = await bcrypt.hash(password, 10)
    console.log("POST: ", username, password)

    db.run(
        `INSERT INTO users (username, password) VALUES (?, ?)`, [
        username,
        encryptedPassword,
    ], function (error) {
        if (error) return res.status(400).send({ message: "User already exists" })
            res.send({message:"User registered"})
    });
});



app.listen(5000, () => console.log("Server running on port 5000"))