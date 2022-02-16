const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
/* PUT request to the database */
router.put('/:id', (req, res) => {
	/* query used to tell the database what data is being updated and where  */
	const queryText = `
        UPDATE "childMedication"
        SET ("medication", "comment", "dosage", "how_often")
        VALUES  
            $1, $2, $3, $4
        WHERE id = $5
    `;
	/* setting the user id and the id of the data to a variable for later use */
	const queryParams = [req.user.id, req.params.id];

	pool
		.query(queryText, queryParams)
		.then((result) => {
			res.sendStatus(200);
		})
		.catch((error) => {
			console.error(`ERROR making database query ${queryText}`, error);
			res.sendStatus(500);
		});
});

module.exports = router;
