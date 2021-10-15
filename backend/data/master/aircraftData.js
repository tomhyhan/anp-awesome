import { db } from '../../database/database.js';

export async function getAll() {
  return db.query(`SELECT * FROM aircraft`).then((result) => {
    return result[0];
  });
}

export async function getallbyAircraftName(aircraft_name) {
  return db
    .query(
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

// export async function getAllByFilter(filter) {
//   console.log(filter);
//   const {
//     aircraft_name,
//     remarks,
//   } = filter;
//   console.log(filter);
//   return db
//     .query(
//       `
//     ${SELECT_JOIN}
//     WHERE
//       sp.aircraft_name=?
//       or
//       sp.remarks=?
//       `,
//       [
//         aircraft_name,
//         remarks,
//       ]
//     )
//     .then((result) => {
//       return result[0];
//     });
// }


export async function getById(aircraftid) {
  return db
    .query(
      `
    SELECT * FROM aircraft
    WHERE material_aircraft_id=?
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
    .query(
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
    .query(
      `
  Update aircraft
  SET 
    aircraft_name=?,
    remarks=?
  WHERE
    material_aircraft_id=?
    `,
      [aircraft_name, remarks, id]
    )
    .then(() => getById(id));
}
