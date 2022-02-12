const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', (req, res) => {

    console.log('req.params.id', req.params.id);
    
    
    const queryText = `
            UPDATE "childMedication"
            SET ("medication", "comments", "dosage", "how_often")
            VALUES $1, $2, $3, $4
            WHERE "id" = $5
    `;

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