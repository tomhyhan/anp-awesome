import * as aircraftData from '../../data/master/aircraftData.js';

export async function getAllAircraft(req, res, next) {
  const aircraftFilter = JSON.parse(req.query.aircraftFilter);
  const filter =
    aircraftFilter === '' || isEmpty(aircraftFilter) ? '' : aircraftFilter;
  const aircraftName = req.query.aircraft_name;

  const aircraft = await (filter
    ? await aircraftData.getallbyAircraftName(filter)
    : await aircraftData.getAll());

  return res.status(200).json(aircraft);
}

export async function getById(req, res, next) {
  const { id } = req.params;
  const aircraft = await aircraftData.getById(id);

  if (aircraft) {
    res.status(200).json(aircraft);
  } else {
    res.status(404).json({ message: `Aircraft not Found` });
  }
}

export async function postAircraft(req, res) {
  const { aircraft } = req.body;
  const newAircraft = await aircraftData.create(aircraft);
  res.status(201).json(newAircraft);
}

export async function updateAircraft(req, res) {
  const { id } = req.params;
  const { aircraft } = req.body;

  const updatedAircraft = await aircraftData.update(id, aircraft);
  if (updatedAircraft) {
    res.status(200).json(updatedAircraft);
  } else {
    res.status(404).json({ message: `Aircraft not Found` });
  }
}

function isEmpty(filter) {
  const empty = Object.values(filter).find((value) => value !== null);
  return empty == null ? true : false;}