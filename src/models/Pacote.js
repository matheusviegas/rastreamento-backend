const mongoose = require("mongoose");

const Pacote = new mongoose.Schema(
  {
    codigo: {
      type: String,
      required: true
    },
    atualizacoes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Atualizacao" }]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Pacote", Pacote);
