const express = require("express");
const router = express.Router();
const Pet = require("../Models/Pet");

router.get("/", async (req, res) => {
  try {
    const pets = await Pet.find({});
    res.json(pets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar pets." });
  }
});

router.post("/criar", async (req, res) => {
  const { nome, especie, cor, idade, foto, peso } = req.body;

  if (!nome && String(nome).length > 0) {
    return res.status(422).json({ msg: "O nome é obrigatório!" });
  } else if (!especie && String(especie).length > 0) {
    return res.status(422).json({ msg: "A espécie é obrigatória!" });
  } else if (!cor && String(cor).length > 0) {
    return res.status(422).json({ msg: "A cor é obrigatória!" });
  } else if (!idade && Number(idade) > 0) {
    return res.status(422).json({ msg: "A idade é obrigatória" });
  } else if (!foto && String(foto).length > 0) {
    return res.status(422).json({ msg: "Foto é obrigatória" });
  } else if (!peso && Number(peso) > 0) {
    return res.status(422).json({ msg: "Peso é obrigatório" });
  }

  const pet = new Pet({ nome, especie, cor, idade, foto, peso });

  try {
    await pet.save();
    res.status(201).json({ msg: "Pet criado com sucesso!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Aconteceu um erro no servidor, tente novamente mais tarde !",
    });
  }
});

router.put("/:petId", async (req, res) => {
  const petId = req.params.petId;
  const updateData = req.body;

  try {
    const updatedPet = await Pet.findByIdAndUpdate(petId, updateData, {
      new: true,
    });
    if (!updatedPet) {
      return res.status(404).json({ error: "Pet não encontrado." });
    }
    res.status(200).json(updatedPet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao atualizar o pet." });
  }
});

router.delete("/:Id", async (req, res) => {
  const Id = req.params.Id;
  try {
    const deletePet = await Pet.findByIdAndRemove(Id);
    if (!deletePet) {
      return res.status(404).json({ error: "Pet não encontrado." });
    }
    console.log(deletePet);
    res.status(200).json("Pet removido com sucesso");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao deletar pet." });
  }
});

module.exports = router;
