import { db } from '../../database/database.js';

export async function getAll() {
  return db.execute(`SELECT * FROM aircraft`).then((result) => {
    return result[0];
  });
}

export async function getallbyAircraftName(aircraft_name) {
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

export async function getById(aircraftid) {
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

export async function create(aircraft) {
  const { aircraft_name, remarks, created_by } = aircraft;

  return db
    .execute(
      `
  INSERT INTO aircraft (aircraft_name, remarks, created_by, created_date)
  VALUES (?,?,?,?)
  `,
      [aircraft_name, remarks, created_by, new Date()]
    )
    .then((result) => getById(result[0].insertId));
}

// getting a aircraft object
export async function update(id, aircraft) {
  const { aircraft_name, remarks } = aircraft;

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
      [aircraft_name, remarks, id]
    )
    .then(() => getById(id));
}
