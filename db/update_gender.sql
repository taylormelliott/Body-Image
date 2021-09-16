UPDATE users 
SET gender = $1
WHERE id = $2
returning *;