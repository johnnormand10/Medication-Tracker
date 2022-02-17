const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');


const router = express.Router();
/* POST request to the database */
router.post('/', rejectUnauthenticated, (req, res,) => {
    /* setting the data to variables for easier use */
    const username = req.body.username;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    /* encrypting the password for security */
    const password = encryptLib.encryptPassword(req.body.password);
    const authLevel = req.body.authLevel;
    const familyId = req.user.family_id;
    /* checking what the familyId is */
    console.log('familyId in invite.router is:', familyId);
    /* query used to tell the database what data needs to be added and where */
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