const Pacote = require("../models/Pacote");

class PacoteController {
  async salvar(req, res) {
    const pacote = await Pacote.create({
      codigo: req.body.codigo
    });

    return res.json(pacote);
  }

  async buscar(req, res) {
    const pacote = await Pacote.find({ codigo: req.params.codigo }).populate({
      path: "atualizacoes",
      options: {
        sort: {
          createdAt: 1
        }
      }
    });

    return res.json(pacote);
  }
}

module.exports = new PacoteController();
