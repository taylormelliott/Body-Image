INSERT INTO results (user_id, desired_body_fat, weight_logs, body_fat_logs, date_logs, results)
VALUES ($1,$2, $3, $4, $5, $6)
returning *;