exports.render = function (req, res) {
  res.render('index', {
    title: 'job seeking organiser',
    user: req.user ? req.user.username : ''
  })
};
