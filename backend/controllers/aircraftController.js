import * as aircraftData from '../data/master/aircraftData.js';

export async function getAllaircraft(req, res, next) {
  const aircraft_name = req.query.aircraft_name;
  const hsn_code = req.query.hsn_code;

  // exculde when aircraft_name exist for now
  let aircraft;
  if (aircraft_name) {
    aircraft = await aircraftData.getallbyaircraftname(aircraft_name);
  } else {
    aircraft = await aircraftData.getAll();
  }

  return res.status(200).json(aircraft);
}

export async function getById(req, res, next) {
  const { id } = req.params;
  const aircraft = await aircraftData.getAllById(id);

  if (aircraft) {
    res.status(200).json(aircraft);
  } else {
    res.status(404).json({ message: `aircraft not Found` });
  }
}

export async function postaircraft(req, res) {
  const { aircraft } = req.body;
  const aircraft = await aircraftData.create(aircraft);
  res.status(201).json(aircraft);
}

export async function updateaircraft(req, res) {
  const { id } = req.params;
  const { aircraft } = req.body;
  console.log(aircraft);
  const aircraft = await aircraftData.update(id, aircraft);
  if (aircraft) {
    res.status(200).json(aircraft);
  } else {
    res.status(404).json({ message: `aircraft not Found` });
  }
}
