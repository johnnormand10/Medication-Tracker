const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

router.get('/', (req, res) => {
        console.log('in tableRouter');
        

    const queryText = `
        SELECT 
            "child"."first_name",
            "childMedication"."id",
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
            "users"."id" = $1;
    `;

    const queryParams = [
        req.user.id
    ];

    pool.query(queryText, queryParams)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((err) => {
        console.error('ERROR getting table data', err);
        res.sendStatus(500);
    })
});

module.exports = router;