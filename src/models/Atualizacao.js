const mongoose = require("mongoose");

const Atualizacao = new mongoose.Schema(
  {
    local: {
      type: String,
      required: true
    },
    tipo: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Atualizacao", Atualizacao);
