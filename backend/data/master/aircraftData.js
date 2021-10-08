import { db } from '../../database/database.js';

export async function getAll() {
  return db.execute(`SELECT * FROM aircraft`).then((result) => {
    return result[0];
  });
}

<<<<<<< HEAD
export async function getallbyaircraftname(aircraft_name) {
=======
export async function getallbyAircraftName(aircraft_name) {
>>>>>>> newtam
  return db
    .execute(
      `
    SELECT * FROM aircraft
    WHERE aircraft_name=?
    `,
      [aircraft_name]
    )
    .then((result) => {
      return result[0];
    });
}

<<<<<<< HEAD
export async function getAllByHsnCode(hsn_code) {
=======
export async function getById(aircraftid) {
>>>>>>> newtam
  return db
    .execute(
      `
    SELECT * FROM aircraft
<<<<<<< HEAD
    WHERE hsn_code=?
    `,
      [hsn_code]
    )
    .then((result) => {
      return result[0];
    });
}

export async function getAllById(aircraftid) {
  return db
    .execute(
      `
    SELECT * FROM aircraft
    WHERE aircraft_id=?
=======
    WHERE material_aircraft_id=?
>>>>>>> newtam
    `,
      [aircraftid]
    )
    .then((result) => {
      return result[0];
    });
}

<<<<<<< HEAD
// receiving as an object
// id => auto
// created_by => from frontend
export async function create(aircraft) {
  const {
    aircraft_name,

    remarks,
    created_by,
  } = aircraft;
=======
export async function create(aircraft) {
  const { aircraft_name, remarks, created_by } = aircraft;
>>>>>>> newtam

  return db
    .execute(
      `
  INSERT INTO aircraft (aircraft_name, remarks, created_by, created_date)
<<<<<<< HEAD
  VALUES (?,?,?,?,?,?,?,?,?,?,?)
  `,
      [
        aircraft_name,
        remarks,
        created_by,
        new Date(),
      ]
    )
    .then((result) => getAllById(result[0].insertId));
=======
  VALUES (?,?,?,?)
  `,
      [aircraft_name, remarks, created_by, new Date()]
    )
    .then((result) => getById(result[0].insertId));
>>>>>>> newtam
}

// getting a aircraft object
export async function update(id, aircraft) {
<<<<<<< HEAD
  const {
    aircraft_name,
    remarks,
  } = aircraft;
=======
  const { aircraft_name, remarks } = aircraft;
>>>>>>> newtam

  return db
    .execute(
      `
  Update aircraft
  SET 
    aircraft_name=?,
<<<<<<< HEAD
    remarks=?,
  WHERE
    aircraft_id=?
    `,
      [
        aircraft_name,
        remarks,
        id,
      ]
    )
    .then(() => getAllById(id));
=======
    remarks=?
  WHERE
    material_aircraft_id=?
    `,
      [aircraft_name, remarks, id]
    )
    .then(() => getById(id));
>>>>>>> newtam
}
