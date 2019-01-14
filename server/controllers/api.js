const Multimedia = require("../models/multimedia");
const Cabinet = require("../models/cabinets");

module.exports = {
  getMultimedia: (req, res) => {
    Multimedia.find({}, (err, equip) => {
      if (err) return res.status(500).send(err);
      res.status(200).send(equip);
    }).sort("-startDate");
  },
  newMultimedia: (req, res) => {
    console.log(req.body);
    const {
      laptop,
      projector,
      kabinet,
      startDate,
      endDate,
      mouse,
      screen,
      powerStrip,
      remote,
      speakers,
      weekly
    } = req.body;

    Multimedia.create(
      {
        laptop,
        projector,
        kabinet,
        startDate,
        endDate,
        mouse,
        screen,
        powerStrip,
        remote,
        speakers,
        weekly
      },
      function(err, user) {
        if (err)
          return res
            .status(500)
            .send(
              `There was a problem adding the information to the database. ${err}`
            );
        res.status(200).send(user);
      }
    );
  }
};
