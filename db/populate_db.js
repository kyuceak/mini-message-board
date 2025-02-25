#! /usr/bin/env node

const { Client } = require("pg");

const connectionString = process.argv[2];

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR ( 255 ),
  username VARCHAR ( 255 ),
  added TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (text,username) 
VALUES
  ('Hi there!','Amando'),
('Hello World!','Charles');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();