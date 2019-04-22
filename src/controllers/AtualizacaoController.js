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

  async deletar(req, res) {
    const pacote = await Pacote.findOne({ codigo: req.params.codigo });
    pacote.atualizacoes.pull({ _id: req.params.id });
    await pacote.save();

    const atualizacao = await Atualizacao.findById(req.params.id);
    await atualizacao.remove();
    return res.send();
  }
}

module.exports = new AtualizacaoController();
