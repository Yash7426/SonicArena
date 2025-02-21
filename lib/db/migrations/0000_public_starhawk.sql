CREATE TABLE IF NOT EXISTS "User" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" varchar(64),
	"password" varchar(64),
	"publicAddress" varchar(255) NOT NULL,
	"cryptoNonce" varchar(255),
	"cryptoNonceExpires" timestamp,
	"balance" varchar,
	CONSTRAINT "User_publicAddress_unique" UNIQUE("publicAddress")
);
