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
    const childName = req.body.childName;
    const medication = req.body.medication;
    const comment = req.body.comment;
    const dosage = req.body.dosage;
    const howOften = req.body.howOften;
    const familyId = req.user.family_id


    const queryText = `
        with rows as(
            INSERT INTO "child" ("first_name", "family_id") VALUES ($1, $2) RETURNING id
        )
        INSERT INTO "childMedication"
            ("medication", "comments", "dosage", "how_often", "child_id")
        SELECT
            $3, $4, $5, $6, id
        FROM rows
        RETURNING id;
    `;

    pool.query(queryText, [childName, familyId, medication, comment, dosage, howOften])
    .then(() => res.sendStatus(201))
    .catch((err) => {
        console.error('Child Medication failed:', err);
        res.sendStatus(500);
    });
});

module.exports = router;