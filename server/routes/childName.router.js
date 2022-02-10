const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.post('/', (req, res) => {
    console.log('in childName.router');
    
    const childName = req.body.childName;
    const familyId = req.user.family_id;

    console.log('req.user.family_id', req.user.family_id);
    

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