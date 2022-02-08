const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');

const router = express.Router();

router.post('/', (req, res,) => {
    const username = req.body.username;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const password = encryptLib.encryptPassword(req.body.password);
    const authLevel = req.body.authLevel;
    const familyId = req.user.family_id;

    console.log('familyId in invite.router is:', familyId);

    const queryText = `
        INSERT INTO "users"
            ("username", "password", "first_name", "last_name", "auth_level", "family_id")
        VALUES 
            ($1, $2, $3, $4, $5, $6)
    `;

    pool.query(queryText, [username, password, firstName, lastName, authLevel, familyId])
    .then(() => res.sendStatus(201))
    .catch((err) => {
        console.error('ERROR in posting invite user', err);
        res.sendStatus(500);
    })
    
})

module.exports = router;