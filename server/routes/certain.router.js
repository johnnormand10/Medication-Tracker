const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/:id', (req, res) => {
    console.log('in certainRouter');

    const queryText = `
    SELECT 
        "child"."id",
        "child"."first_name",
        "childMedication"."medication",
        "childMedication"."comments",
        "childMedication"."dosage",
        "childMedication"."how_often"
    FROM "users"
    JOIN "family"
        ON "users"."family_id" = "family"."id"
    JOIN "child" 
        ON "family"."id" = "child"."family_id"
    JOIN "childMedication" 
        ON "child"."id" = "childMedication"."child_id"
    WHERE 
        "users"."id" = $1
        AND
        "child"."id" = $2;
    `;

    console.log('user.id in certain.router is:', req.user.id);
    console.log('nameId in certain.router is:', req.params.id);
    
    

    const queryParams = [
        req.user.id,
        req.params.id
    ];

    pool.query(queryText, queryParams)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((err) => {
        console.error('ERROR GETting certain table data', err);
        res.sendStatus(500);
    })
});

module.exports = router;