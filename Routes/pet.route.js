const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /pet/:
 *   get:
 *     summary: Retorna home
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.get("/", (req, res) =>
{
    res.send("Bem vindo aos pets");
})

module.exports = router;