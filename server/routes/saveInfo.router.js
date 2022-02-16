const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
/* PUT request to the database */
router.put('/:id', (req, res) => {
    /* setting the id of the data to a variable for easier use */
    const idToUpdate = req.params.id;
    /* query used to tell the database what data needs to be updated and where */
    const queryText = `
        UPDATE "childMedication"
        SET "medication" = $1, "comments" = $2, "dosage" = $3, "how_often" = $4
        WHERE id = $5
    `;
    /* setting the updated data to a variable for easier use */
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