// Temporary arrays until db is created
let users = [];

/* GET /user route to retrieve all user entries */
const getUsers = (req, res) => {
  res.status(200).send(users);
};

/* POST /user route to post a user */
const postUser = (req, res) => {
  users.push(req.body);
  res.status(200).send('You made a POST to the /user endpoint');
};

/* GET /user/:id route to retrieve specific user info */
const getUser = (req, res) => {
  let userid = req.params.id;
  let userInfo = users.filter(user => {
    if (user.userid === userid) return user;
  });
  if (userInfo.length <= 0) {
    res.status(200).send('You made an unsuccessful GET to the /user/:id endpoint. User does not exist');
  } else {
    res.status(200).send(userInfo);
  }
};

/* PUT /user/:id route to update specific user info */
const putUser = (req, res) => {
  res.status(200).send('You made a PUT to the /user/:id endpoint');
};

/* DELETE /user/:id route to delete specific user */
const deleteUser = (req, res) => {
  res.status(200).send('You made a DELETE to the /user/:id endpoint');
};

// Export functions via ES6
module.exports = { getUsers, postUser, getUser, putUser, deleteUser };