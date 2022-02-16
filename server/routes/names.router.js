const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();
/* GET request to the database */
router.get('/', rejectUnauthenticated, (req, res) => {
    /* query used to tell the database what data is request*/
    const queryText = `
        SELECT 
            "child"."id",
            "child"."first_name"            
        FROM "users"
        JOIN "family"
            ON "users"."family_id" = "family"."id"
        JOIN "child"
            ON "family"."id" = "child"."family_id"
        WHERE "users"."id" = $1
        GROUP BY "child"."first_name", "child"."id";
    `;
    /* setting the user id to a variable for later use */
    const queryParams = [
        req.user.id
    ];

    pool.query(queryText, queryParams)
    .then((result) => {
        /* sending back the data that was requested */
        res.send(result.rows);
    })
    .catch((err) => {
        console.error('ERROR getting child names', err);
        res.sendStatus(500);
    })
});

module.exports = router;