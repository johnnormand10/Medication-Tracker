const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

router.get('/', rejectUnauthenticated, (req, res) => {

    const queryText = `
        SELECT 
            "child"."first_name"
        FROM "users"
        JOIN "family"
            ON "users"."family_id" = "family"."id"
        JOIN "child"
            ON "family"."id" = "child"."family_id"
        WHERE "users"."id" = $1
        GROUP BY "child"."first_name";
    `;

    const queryParams = [
        req.user.id
    ];

    pool.query(queryText, queryParams)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((err) => {
        console.error('ERROR getting child names', err);
        res.sendStatus(500);
    })
});

module.exports = router;