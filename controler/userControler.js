const fs = require("fs");

const user = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/db.json`));

exports.getAllUser = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
};

exports.getOneUser = (req, res) => {
  const id = req.params.id * 1;

  if (id > user.length) {
    return res.status(404).json({
      status: "fail",
      data: "Invalid ID",
    });
  }

  const findUser = user.find((el) => el.id === id);

  res.status(200).json({
    status: "success",
    data: {
      findUser,
    },
  });
};

exports.addNewUser = (req, res) => {
  const newId = user[user.length - 1].id + 1;
  const newUser = Object.assign({ id: newId }, req.body);

  user.push(newUser);

  fs.writeFile(
    `
        ${__dirname}/dev-data/db.json`,
    JSON.stringify(user),
    (err) => {
      res.status(201).json({
        status: "success",
        data: {
          user: newUser,
        },
      });
    }
  );
};

exports.patchUser = (req, res) => {
  const id = req.params.id * 1;

  if (id > user.length) {
    return res.status(404).json({
      status: "fail",
      data: "Invalid ID",
    });
  }
  res.status(200).json({
    status:'success',
    data : '<updated user ...>'
  })
}

exports.deleteUser = (req, res) => {
  const id = req.params.id * 1;

  if (id > user.length) {
    return res.status(404).json({
      status: "fail",
      data: "Invalid ID",
    });
  }
  res.status(200).json({
    status:'success',
    data : '<deleted user ...>'
  })
}