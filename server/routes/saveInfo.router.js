const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.put('/:id', (req, res) => {
    const idToUpdate = req.params.id;

    const queryText = `
        UPDATE "childMedication"
        SET ("medication", "comments", "dosage", "how_often")
        VALUES 
            $1, $2, $3, $4
        WHERE id = $5
    `;

    const queryParams = [
        req.body.medication,
        req.body.comments,
        req.body.dosage,
        req.body.how_often,
        idToUpdate,
    ];

    pool.query(queryText, queryParams)
    .then((result) => {
        res.sendStatus(201);
    })
    .catch((error) => {
        console.error(`ERROR making database query ${queryText}`, error);
        res.sendStatus(500);
    })
})

module.exports = router;