--
--  Users
--

DROP TABLE IF EXISTS "user" CASCADE;
CREATE TABLE "user" (
	"id" SERIAL NOT NULL,
    "email" VARCHAR NOT NULL,
    "username" VARCHAR NOT NULL,
    "name" VARCHAR NOT NULL,
    "surname" VARCHAR NOT NULL,
    "password" VARCHAR NOT NULL,
    "isAdmin" BOOLEAN NOT NULL,
    
    PRIMARY KEY ("id"),
    UNIQUE ("email", "username")
);
