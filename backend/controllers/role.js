const Role = require("../Models/role");

const createRole = async (req, res) => {
  if(!req.body.name || !req.body.description) return res.status(400).send('Error: There are empty fields.');

  var existingRole = await Role.findOne({name: req.body.name});
  if(existingRole) return res.status(400).send('Error: This role already exist.');

  let role = new Role({
    name: req.body.name,
    description: req.body.description,
  });

  let result = await role.save();
  if(!result) return res.status(400).send('Error to create role');
  return res.status(200).send({ result });
};
const getRoles = async (req, res) => {};
const updateRoleDescription = async (req, res) => {};
const unactivateRole = async (req, res) => {};

module.exports = {
  createRole,
  getRoles,
  updateRoleDescription,
  unactivateRole,
};
