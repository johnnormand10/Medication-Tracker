
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

-- Create database named medication_tracker
-- Then run these queries to get the correct tables
CREATE TABLE "family" (
	"id" SERIAL PRIMARY KEY
);

CREATE TABLE "medication" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(2000) NOT NULL
);

CREATE TABLE "users" (
	"id" SERIAL PRIMARY KEY,
	"username" VARCHAR(255) UNIQUE NOT NULL,
	"password" VARCHAR(255) NOT NULL,
	"first_name" VARCHAR(255) NOT NULL,
	"last_name" VARCHAR(255) NOT NULL,
	"auth_level" VARCHAR(255) DEFAULT 'ADMIN',
	"family_id" INT,
	FOREIGN KEY ("family_id") REFERENCES "family" ("id")
);

CREATE TABLE "child" (
	"id" SERIAL PRIMARY KEY,
	"firstName" VARCHAR(255) NOT NULL,
	"familyId" INT,
	FOREIGN KEY ("familyId") REFERENCES "family" ("id")
);

CREATE TABLE "childMedicationJoiner" (
	"id" SERIAL PRIMARY KEY,
	"childId" INT,
	FOREIGN KEY ("childId") REFERENCES "child" ("id"),
	"medicationId" INT,
	FOREIGN KEY ("medicationId") REFERENCES "medication" ("id"),
	"comments" VARCHAR (2550),
	"dosage" VARCHAR(255) NOT NULL
);

