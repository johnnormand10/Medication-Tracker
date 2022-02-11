const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', (req, res) => {
    
    const queryText = `
        SELECT 
            "childMedication"."medication",
            "childMedication"."comments",
            "childMedication"."dosage",
            "childMedication"."how_often"
        FROM "child"
        JOIN "childMedication" 
            ON "child"."id" = "medication"."child_id";
    `;

    pool.query(queryText)
    .then((result) => {
        res.sendStatus(200);
    })
    .catch((err) => {
        console.error('ERROR getting edit info in fetchEditInfo.router', err);
    })
})

module.exports = router;