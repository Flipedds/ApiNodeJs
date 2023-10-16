const express = require("express");
const router = express.Router();
const petService = require('../Services/petService');

router.get("/", petService.get);

router.post("/criar", petService.post);

router.put("/:petId", petService.put);

router.delete("/:Id", petService.delete);

module.exports = router;
