const Atualizacao = require("../models/Atualizacao");
const Pacote = require("../models/Pacote");

class AtualizacaoController {
  async salvar(req, res) {
    const pacote = await Pacote.findOne({ codigo: req.params.codigo });

    const atualizacao = await Atualizacao.create({
      local: req.body.local,
      tipo: req.body.tipo
    });

    pacote.atualizacoes.push(atualizacao);

    await pacote.save();

    return res.json(atualizacao);
  }
}

module.exports = new AtualizacaoController();
