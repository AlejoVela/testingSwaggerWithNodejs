const router = require("express").Router();
const RoleController = require("../controllers/role");

router.post("/createRole", RoleController.createRole);
router.get('/getRole/:name?', RoleController.getRoles);
router.put('/updateRole', RoleController.updateRoleDescription);
router.put('/deleteRole', RoleController.unactivateRole);

module.exports = router;
