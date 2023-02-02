module.exports = middleWre = (req, res, next) => {
  if (!req.query.age) {
    res.send("Provide ur age");
  } else if (req.query.age < 18) {
    res.send("Not eligible");
  } else {
    next();
  }
};
