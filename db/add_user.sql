INSERT INTO users (email, passwords)
VALUES ($1, $2)
returning *;