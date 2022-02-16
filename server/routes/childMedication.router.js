const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

router.get('/', rejectUnauthenticated, (req, res) => {
    res.send(req.user);
    console.log('user in childMedication.router is:', req.user);
});




// Handles POST request with new user data
router.post('/', (req, res) => {
    const childId = req.body.childId;
    const medication = req.body.medication;
    const comment = req.body.comment;
    const dosage = req.body.dosage;
    const howOften = req.body.howOften;

    /* query used to tell the database what data is added to the database */
    const queryText = `
        INSERT INTO "childMedication"
            ("medication", "comments", "dosage", "how_often", "child_id")
        VALUES
            ($1, $2, $3, $4, $5);
    `;

    pool.query(queryText, [medication, comment, dosage, howOften, childId])
    .then(() => res.sendStatus(201))
    .catch((err) => {
        console.error('Child Medication failed:', err);
        res.sendStatus(500);
    });
});

module.exports = router;