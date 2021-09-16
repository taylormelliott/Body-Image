UPDATE results
SET weight_logs = $1, body_fat_logs = $2
WHERE id = $3 
returning *;