const Pacote = require("../models/Pacote");

class PacoteController {
  async salvar(req, res) {
    const pacote = await Pacote.create({
      codigo: req.body.codigo
    });

    return res.json(pacote);
  }

  async listar(req, res) {
    const pacotes = await Pacote.find();

    return res.json(pacotes);
  }

  async buscar(req, res) {
    const pacote = await Pacote.findOne({ codigo: req.params.codigo }).populate(
      {
        path: "atualizacoes",
        options: {
          sort: {
            createdAt: 1
          }
        }
      }
    );

    return res.json(pacote);
  }

  async deletar(req, res) {
    const pacote = await Pacote.findOne({ codigo: req.params.codigo });
    await pacote.remove();
    return res.send();
  }
}

module.exports = new PacoteController();
