const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


const router = express.Router();
/* GET request to get the data from the database */
router.get('/:id',rejectUnauthenticated, (req, res) => {
    console.log('in certainRouter');
    /* query used to tell the database what data is requested */
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
    /* checking what the user id is in the router */
    console.log('user.id in certain.router is:', req.user.id);
    /* checking what the id of the data is in the router */
    console.log('nameId in certain.router is:', req.params.id);
    
    
    /* setting the user id and child id to a variable to be used later */
    const queryParams = [
        req.user.id,
        req.params.id
    ];

    pool.query(queryText, queryParams)
    .then((result) => {
        /* sending back the data that was pulled from the database */
        res.send(result.rows);
    })
    .catch((err) => {
        console.error('ERROR GETting certain table data', err);
        res.sendStatus(500);
    })
});

module.exports = router;