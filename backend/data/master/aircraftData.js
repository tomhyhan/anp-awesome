import { db } from '../../database/database.js';

export async function getAll() {
  return db.execute(`SELECT * FROM aircraft`).then((result) => {
    return result[0];
  });
}

export async function getallbyaircraftname(aircraft_name) {
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

export async function getAllByHsnCode(hsn_code) {
  return db
    .execute(
      `
    SELECT * FROM aircraft
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
    `,
      [aircraftid]
    )
    .then((result) => {
      return result[0];
    });
}

// receiving as an object
// id => auto
// created_by => from frontend
export async function create(aircraft) {
  const {
    aircraft_name,

    remarks,
    created_by,
  } = aircraft;

  return db
    .execute(
      `
  INSERT INTO aircraft (aircraft_name, remarks, created_by, created_date)
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
}

// getting a aircraft object
export async function update(id, aircraft) {
  const {
    aircraft_name,
    remarks,
  } = aircraft;

  return db
    .execute(
      `
  Update aircraft
  SET 
    aircraft_name=?,
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
}
