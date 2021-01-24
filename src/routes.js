const route = require("express").Router();

const VehicleController = require("./controllers/VehiclesController");

route.post("/vehicle/create", VehicleController.store);
route.get("/", VehicleController.index);
route.post("/vehicle/update", VehicleController.update);
route.get("/vehicle/delete/:id", VehicleController.delete);

module.exports = route;
