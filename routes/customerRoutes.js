const express = require("express");
const router = express.Router(); 
const{
  list,
  show,
  create,
  update,
  remove,
} = require("../controllers/todoControllers");

router.get("/todos", list);
router.get("/todos/:id", show);
router.post("/todos", create);
router.put("/todos/:id", update);
router.delete("/todos/:id", remove);

module.exports = router;