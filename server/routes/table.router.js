const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();
/* GET request */
router.get('/', (req, res) => {
        /* checking if I made it to the correct router */
        console.log('in tableRouter');
        
    /* query used to tell the database what data is requested */
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
    /* setting the user id to a variable for easier use */
    const queryParams = [
        req.user.id
    ];

    pool.query(queryText, queryParams)
    .then((result) => {
        /* sending back the requested data */
        res.send(result.rows);
    })
    .catch((err) => {
        console.error('ERROR getting table data', err);
        res.sendStatus(500);
    })
});

/* PUT request to the database */
router.put('/:id', (req, res) => {
    /* checking to make sure I made it to the correct router */
    console.log('in updateItem.router');
    /* query used to tell the database what data needs to be changed and where */
    let queryText = `
        UPDATE "childMedication"
        SET "medication" = $1, "comments"=$2, "dosage"=$3, "how_often"=$4
        WHERE id = $5
    `;
    /* setting the updated data to a variable for easier use */
    let queryParams = [
        req.body.medication,
        req.body.comments,
        req.body.dosage,
        req.body.how_often,
        req.params.id,
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

/* DELETE request to the database */
router.delete('/:id',  (req, res) => {
    /* checking what id is being passed to the router */
    console.log('req.params.id in delete', req.params.id);
        /* query used to tell the database what data needs to be removed */
        const queryText = `
            DELETE FROM "childMedication"
            WHERE id = $1
        `;

        pool.query(queryText, [req.params.id])
        .then((result) => {
            console.log(result);
            res.sendStatus(204);
        })
        .catch((err) => {
            console.error('DELETE Failed in table.router.js');
            res.sendStatus(500);
        })
    
})

module.exports = router;