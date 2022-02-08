
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

-- Create database named medication_tracker
-- Then run these queries to get the correct tables
CREATE TABLE "users" (
	"id" SERIAL PRIMARY KEY,
	"username" VARCHAR(255) UNIQUE NOT NULL,
	"password" VARCHAR(255) NOT NULL,
	"first_name" VARCHAR(255) NOT NULL,
	"last_name" VARCHAR(255) NOT NULL,
	"auth_level" VARCHAR(255) DEFAULT 'Parent',
	"family_id" INT,
	FOREIGN KEY ("family_id") REFERENCES "family" ("id")
);


CREATE TABLE "child" (
	"id" SERIAL PRIMARY KEY,
	"first_name" VARCHAR(255) NOT NULL,
	"family_id" INT,
	FOREIGN KEY ("family_id") REFERENCES "family" ("id")
);

CREATE TABLE "childMedication" (
	"id" SERIAL PRIMARY KEY,
	"medication" VARCHAR(2000)NOT NULL,
	"comments" VARCHAR (2550),
	"dosage" VARCHAR(255) NOT NULL,
	"how_often" VARCHAR(255) NOT NULL,
	"child_id" INT,
	FOREIGN KEY ("child_id") REFERENCES "child" ("id")
);
