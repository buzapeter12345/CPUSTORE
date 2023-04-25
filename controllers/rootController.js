const CPU = require("../models/cpu");

exports.getRoot = async (req, res) => {
  try {
    const cpus = await CPU.find({});
    res.status(200).render("index", { cpus });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
