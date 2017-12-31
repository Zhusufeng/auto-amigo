const checkAuth = (req, res, next) => {
  if (!req.session.user) {
    res.status(200).send({error: 'You are not logged in!'}); // TODO: this should redirect to login...
  } else {
    next();
  }
};

const createSession = (req, res, newUser) => {
  return req.session.regenerate(() => { // Makes new cookie even if already in a session
    req.session.user = newUser; // Sets session's user to newest logged in
    res.status(200).send(newUser); // TODO: this should redirect to main page (gas log for now) 
  });
}

module.exports = {checkAuth, createSession};