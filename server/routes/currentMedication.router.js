const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/* GET request to get the data from the database */
router.get('/:id', rejectUnauthenticated,(req, res) => {
    /* checking what the id is */
    console.log('req.params is', req.params.id);
    /* query used to get the data asked for */
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
    /* setting the id to a variable for later use */
    const queryParams = [ 
        req.params.id
    ];

    pool.query(queryText, queryParams)
    .then((result) => {
        /* sending the requested data back */
        res.send(result.rows)
    })
    .catch((err) => {
        console.error('ERROR GETTING medication name in currentMedication', err);
    })
})

module.exports = router;