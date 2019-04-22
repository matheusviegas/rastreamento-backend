const express = require("express");

const routes = express.Router();

const PacoteController = require("./controllers/PacoteController");
const AtualizacaoController = require("./controllers/AtualizacaoController");

routes.get("/pacote", PacoteController.listar);
routes.post("/pacote", PacoteController.salvar);
routes.post("/pacote/:codigo/atualizacao", AtualizacaoController.salvar);
routes.get("/pacote/:codigo", PacoteController.buscar);
routes.delete("/pacote/:codigo", PacoteController.deletar);
routes.delete("/pacote/:codigo/atualizacao/:id", AtualizacaoController.deletar);

routes.get("/", (req, res) => {
  return res.send("inicio");
});

module.exports = routes;
