const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', (req, res) => {

    console.log('req.params is', req.params.id);
    


    const queryText = `
        SELECT 
            "childMedication"."id",
            "childMedication"."medication",
            "childMedication"."comments",
            "childMedication"."dosage",
            "childMedication"."how_often"
        FROM "childMedication"
        WHERE "id" = $1;
    `;

    const queryParams = [ 
        req.params.id
    ];

    pool.query(queryText, queryParams)
    .then((result) => {
        res.send(result.rows)
    })
    .catch((err) => {
        console.error('ERROR GETTING medication name in currentMedication', err);
    })
})

module.exports = router;