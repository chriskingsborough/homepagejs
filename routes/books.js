const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./data/homepage.db') 


// Get Books
router.get('/', function(req, res, next) {
    db.all("SELECT id, title, author, date_finished FROM books ORDER BY date_finished DESC",
    function(err, rows) {
        if (err) {
            res.status(400).json(err)
        }
        res.status(200).json(rows)
    })
})

// Delete book
router.delete('/', function(req, res) {
    const id = req.body.id || null;
    const title = req.body.title || null;
    const author = req.body.author || null;

    const clear_books = req.body.clear_books || false;
    let sql;
    if (clear_books) {
        sql = 'DELETE FROM books';
    } else {
        sql = `
            DELETE FROM books
            WHERE (id = ${id})
                or (title = ${title})
                or (author = ${author}
            )`
    }
    db.run(sql, function(err) {
        console.error(err);
        if (err) {
            res.status(400).json(err)
        }
        res.status(200).json({status: 'Record(s) Deleted'});
    })
})

// Post Books
router.post('/', function(req, res, next) {
    const title = req.body.title;
    const author = req.body.author;
    const date_finished = req.body.date_finished || null;

    const sql = `
        INSERT INTO books
        (title, author, date_finished)
        VALUES ($title, $author, $date_finished);`
    db.run(sql, {
        $title: title,
        $author: author,
        $date_finished: date_finished
    }, function(err) {
        if (err) {
            res.status(400).json(err);
        }
        res.status(200).json({status: 'Record Inserted'})
    })
})


module.exports = router;