DELETE FROM results WHERE id = $1
returning *;