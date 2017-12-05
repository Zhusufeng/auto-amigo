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
// getUser

/* PUT /user/:id route to update specific user info */
// putUser

/* DELETE /user/:id route to delete specific user */
// deleteUser