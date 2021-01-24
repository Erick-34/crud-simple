const Vehicle = require("../model/Vehicle");

class VehiclesController {
  async store(req, res) {
    const vehicle = req.body;
    const vehiles = await Vehicle.create(vehicle);
    res.status(200).json(vehiles);
  }

  async index(req, res) {
    const vehicles = await Vehicle.find();
    res.status(200).json(vehicles);
  }

  async update(req, res) {
    const { id, brand, model, year, manufacturing, board } = req.body;
    const updated = await Vehicle.updateOne(
      { _id: id },
      {
        brand,
        model,
        year,
        manufacturing,
        board,
      }
    );

    res.status(200).json(updated);
  }

  async delete(req, res) {
    const { id } = req.params;
    const vehicle = await Vehicle.deleteOne({ _id: id });
    res.status(200).json(vehicle);
  }
}

module.exports = new VehiclesController();
