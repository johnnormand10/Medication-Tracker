const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
/* GET request to the database */
router.get('/:id', (req, res) => {
    /* checking what id is being passed to the router */
    console.log('req.params.id', req.params.id);
    /* query used to tell the database what data is being updated and where */
    const queryText = `
            UPDATE "childMedication"
            SET ("medication", "comments", "dosage", "how_often")
            VALUES $1, $2, $3, $4
            WHERE "id" = $5
    `;
    /* setting the data to a variable for later use */
    const queryParams = [ 
        req.body.medication,
        req.body.comments,
        req.body.dosage,
        req.body.how_often,
        req.params.id 
    ];

    pool.query(queryText, queryParams)
    .then((result) => {
        res.sendStatus(201);
    })
    .catch((err) => {
        console.error('ERROR getting edit info in fetchEditInfo.router', err);
    })
})

module.exports = router;