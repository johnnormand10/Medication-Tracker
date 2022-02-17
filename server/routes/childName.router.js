const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


const router = express.Router();
/* POST request to the database */
router.post('/', rejectUnauthenticated, (req, res) => {
    /* checking if I made it into the correct router */
    console.log('in childName.router');
    /* setting the child name to a variable for use later*/
    const childName = req.body.childName;
    /* setting the family joiner id to a variable for use later */
    const familyId = req.user.family_id;
    /* checking what the family id is */
    console.log('req.user.family_id', req.user.family_id);
    
    /* query used to tell the database what data needs to be entered in the table  */
    const queryText = `
        INSERT INTO "child"
            ("first_name", "family_id")
        VALUES
            ($1, $2)
    `;

    pool.query(queryText, [childName, familyId])
    .then(() => res.sendStatus(201))
    .catch((err) => {
        console.error("Child Name POST has failed", err);
        res.sendStatus(500);
    });
});

module.exports = router;