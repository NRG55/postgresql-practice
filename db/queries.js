const pool = require("./pool");

async function getAllUsernames() {
    const { rows } = await pool.query("SELECT * FROM usernames");
    console.log(rows)
    return rows;
};

async function insertUsername(username) {
    await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
};

async function searchUsername(username) {
    const { rows } = await pool.query("SELECT username FROM usernames WHERE LOWER(username) LIKE $1",[`%${username}%`]);
    console.log(rows[0])
    return rows;
}

async function deleteAllUsernames() {
    await pool.query("DELETE FROM usernames");     
};

module.exports = {
    getAllUsernames,
    insertUsername,
    searchUsername,
    deleteAllUsernames
};