const db = require("../db/queries");

exports.usersGet = async (req, res) => {
    const username = req.query.search;

    if (username) {
        const usernames = await db.searchUsername(username);
        console.log("Usernames: ", usernames);
        res.render("index", { title: "User List", usernames: usernames });        
    } else {
        const usernames = await db.getAllUsernames();
        console.log("Usernames: ", usernames);
        res.render("index", { title: "User List", usernames: usernames });
    };   
};   

exports.usersCreateGet = (req, res) => {
    console.log("usernames will be logged here - wip");
    res.render("usersForm", { title: "Create a user" });
};

exports.usersCreatePost = async (req, res) => {
    const { username } = req.body;
    await db.insertUsername(username);
    console.log("username to be saved: ", username);
    res.redirect("/");
};

exports.usersDeleteGet = async (req, res) => {   
    await db.deleteAllUsernames();  
    res.redirect("/");
};