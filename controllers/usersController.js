exports.usersGet = (req, res) => {
    console.log("usernames will be logged here - wip");
    res.render("index", { title: "User List" });
};

exports.usersCreateGet = (req, res) => {
    console.log("usernames will be logged here - wip");
    res.render("usersForm", { title: "Create a user" });
};

exports.usersCreatePost = (req, res) => {
    console.log("username to be saved: ", req.body.username);
    res.redirect("/");
};